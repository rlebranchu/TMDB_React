import axios from 'axios';
import {LoginError, TMDBMovieData, TMDBMovieList, TMDBToken, Video} from '../types/interfaces';

import { URL, API_KEY } from './const';

export const tryTMDBLogin = async (username: string, password: string) : Promise<TMDBToken | LoginError> => {
  let returnValue : TMDBToken | LoginError = { error_code: -1, error_message: "Global error during Login"};
  await axios.get(`${URL}authentication/token/new?api_key=${API_KEY}`)
    .then( async responseToken => {
      await axios.post(
        `${URL}authentication/token/validate_with_login?api_key=${API_KEY}`, 
        {
          username: username,
          password: password,
          request_token: responseToken.data.request_token
        }
      ).then(async responseLogin => {
        await axios.get(
          `${URL}authentication/session/new?api_key=${API_KEY}&request_token=${responseToken.data.request_token}`
        ).then(responseSession => {
          const token : TMDBToken = {
            account_id: username,
            token: responseToken.data.request_token,
            expires_at: responseToken.data.expires_at,
            session_id : responseSession.data.session_id,
          };
          returnValue = token;
        }).catch(_ => {
          returnValue = {error_code: 2, error_message: "Error during Session's generation"};
        });
      }).catch(_ => {
        returnValue = {error_code: 1, error_message: "Login failed - Username and/or password are incorrect :("};
      });
    }).catch(_ => {
      returnValue = {error_code: 0, error_message: "Error during Token's generation"};
    });
    return returnValue;
}

export const tryTMDBLogout = async (session_id: string) : Promise<boolean> => {
  let returnValue : boolean = false;
  await axios.post(`${URL}/authentication/session?api_key=${API_KEY}`, {session_id})
  .then(response => {
    returnValue = response.data.success;
  })
  .catch(_ => {
    returnValue = false;
  });
  return returnValue;
}

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

export const fetchDatabyMovieID = async (id: string, session_id: string) : Promise<TMDBMovieData> => {
  const [responseDetails, responseVideo, responseMovieState] = await Promise.all([
    axios.get(
      `${URL}movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=backdrop_path,genres,homepage,overview,popularity,production_companies,revenue,status,vote_count`
    ),
    axios.get(
      `${URL}movie/${id}/videos?api_key=${API_KEY}`
    ),
    axios.get(
      `${URL}movie/${id}/account_states?api_key=${API_KEY}&session_id=${session_id}`
    ),
  ]);
  const listVideosYoutube: Array<Video> = (responseVideo.data.results as Array<Video>).filter(v => v.site == "YouTube");
  const videoKey = listVideosYoutube.length > 0 ? listVideosYoutube[0].key : "";
  const dataMovie = {
    ...responseDetails.data,
    release_date: new Date(responseDetails.data.release_date),
    video: videoKey,
    favorite: responseMovieState.data.favorite
  };
  return dataMovie;
};

export const markFavoriteMovie = async (favorite: boolean, account_id: string, movie_id: string, session_id: string,) => {
  const response = await axios.post(
    `${URL}account/${account_id}/favorite?api_key=${API_KEY}&session_id=${session_id}`,
    {
      media_type: "movie",
      media_id: movie_id,
      favorite: favorite
    }
  );
  return [...response.data.results];
}