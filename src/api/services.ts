import axios from 'axios';
import {TMDBMovieData, TMDBMovieList, Video} from '../types/interfaces';

import { URL, API_KEY } from './const';

export const fetchMovies = async (search: string) : Promise<TMDBMovieList[]> => {
  if (search.trim() == "") {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    return [...response.data.results];
  } else {
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
    );
    return [...response.data.results];
  }
};

export const fetchDatabyMovieID = async (id: string) : Promise<TMDBMovieData> => {
  const [responseDetails, responseVideo] = await Promise.all([
    axios.get(
      `${URL}movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=backdrop_path,genres,homepage,overview,popularity,production_companies,revenue,status,vote_count`
    ),
    axios.get(
      `${URL}movie/${id}/videos?api_key=${API_KEY}`
    ),
    axios.get(
      `${URL}movie/${id}/account_states?api_key=${API_KEY}`
    ),
  ]);
  const listVideosYoutube: Array<Video> = (responseVideo.data.results as Array<Video>).filter(v => v.site == "YouTube");
  const videoKey = listVideosYoutube.length > 0 ? listVideosYoutube[0].key : "";
  const dataMovie = {
    ...responseDetails.data,
    release_date: new Date(responseDetails.data.release_date),
    video: videoKey,
  };
  return dataMovie;
};