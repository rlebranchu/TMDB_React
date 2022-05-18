import axios from 'axios';
import {TMDBMovieData, TMDBMovieList} from '../types/interfaces';

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
  const response = await axios.get(
    `${URL}movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=backdrop_path,genres,homepage,overview,popularity,production_companies,revenue,status,video,vote_count`
  );
  return response.data;
};