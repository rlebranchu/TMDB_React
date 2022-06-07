import axios from 'axios';
import {LoginError, TMDBMovieData, TMDBMovieList, TMDBToken, Video} from '../types/interfaces';

import { URL, API_KEY } from './const';

// Function to log the user to TMDB API
export const tryTMDBLogin = async (username: string, password: string) : Promise<TMDBToken | LoginError> => {
  let returnValue : TMDBToken | LoginError = { error_code: -1, error_message: "Global error during Login"};
  // First Call to API : generate token for the session 
  await axios.get(`${URL}authentication/token/new?api_key=${API_KEY}`)
    .then( async responseToken => {
      // Second call to API : send user information and affect/validate token to this user
      await axios.post(
        `${URL}authentication/token/validate_with_login?api_key=${API_KEY}`, 
        {
          username: username,
          password: password,
          request_token: responseToken.data.request_token
        }
      ).then(async responseLogin => {
        // Third Call to API : get session id (used to get favorite movies of user)
        await axios.get(
          `${URL}authentication/session/new?api_key=${API_KEY}&request_token=${responseToken.data.request_token}`
        ).then(responseSession => {
          // Generate object which will be save in global state
          const token : TMDBToken = {
            account_id: username,
            token: responseToken.data.request_token,
            expires_at: responseToken.data.expires_at,
            session_id : responseSession.data.session_id,
          };
          returnValue = token;
        }).catch(_ => {
          // If get session id is wrong
          returnValue = {error_code: 2, error_message: "Error during Session's generation"};
        });
      }).catch(_ => {
        // If token validation  with user information is wrong
        returnValue = {error_code: 1, error_message: "Login failed - Username and/or password are incorrect :("};
      });
    }).catch(_ => {
      // If token generation is wrong
      returnValue = {error_code: 0, error_message: "Error during Token's generation"};
    });
    return returnValue;
}

// Try to logout of the application
export const tryTMDBLogout = async (session_id: string) : Promise<boolean> => {
  let returnValue : boolean = false;
  await axios.post(`${URL}/authentication/session?api_key=${API_KEY}`, {session_id})
  .then(response => {
    returnValue = response.data.success;
  })
  .catch(_ => {
    returnValue = false;
  });
  // Return the result of logout
  return returnValue;
}

// Fetch all current principal movies of TMDB
export const fetchMovies = async (search: string) : Promise<TMDBMovieList[] | undefined> => {
  let returnValue = undefined;
  const requestUrl = search.trim() == "" ? `${URL}movie/popular?api_key=${API_KEY}` : 
    `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`;

  await axios.get(requestUrl)
    .then(response => returnValue = [...response.data.results])
    .catch(_ => returnValue = undefined);
  // If Call API is worng, we return undefined
  return returnValue;
};

// Fetch all informations of movie by its id
export const fetchDatabyMovieID = async (id: string, session_id: string) : Promise<TMDBMovieData | undefined> => {
  let returnValue = undefined;
  await Promise.all([
    // Get all informations which define the movie (with filter on element return by API)
    axios.get(
      `${URL}movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=backdrop_path,homepage,overview,popularity,production_companies,revenue,status,vote_count`
    ),
    // Get the list of videos linked to the movie
    axios.get(
      `${URL}movie/${id}/videos?api_key=${API_KEY}`
    ),
    // Get informations about us on the movie : favorite, note, etc. 
    axios.get(
      `${URL}movie/${id}/account_states?api_key=${API_KEY}&session_id=${session_id}`
    ),
    // Get List of similary movies
    axios.get(
      `${URL}movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    ),
  ]).then(response => {
    // Separate the differents response of API
    const [responseDetails, responseVideo, responseMovieState, reponseSimilarMovies] = response;
    // Filter on only Youtube Video
    const listVideosYoutube: Array<Video> = (responseVideo.data.results as Array<Video>).filter(v => v.site == "YouTube");
    // Condition to know if we show the YoutubeButton or not
    const videoKey = listVideosYoutube.length > 0 ? listVideosYoutube[0].key : "";
    // Creation of the global obj which will be return to front (with all informations)
    const dataMovie: TMDBMovieData = {
      ...responseDetails.data,
      release_date: new Date(responseDetails.data.release_date),
      video: videoKey,
      favorite: responseMovieState.data.favorite,
      similarMovies: reponseSimilarMovies.data.results.map((movie: TMDBMovieList) => {
        return {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          release_date: movie.release_date
        };
      })
    };
    returnValue = dataMovie
  }).catch(_ => {
    // At any error of execution, we return no information
    returnValue = undefined;
  });
  return returnValue;
};

// Post to API that we want to change Favorite's status 
export const markFavoriteMovie = async (favorite: boolean, account_id: string, movie_id: string, session_id: string,) : Promise<boolean> => {
  let returnValue : boolean = false;
  await axios.post(
    `${URL}account/${account_id}/favorite?api_key=${API_KEY}&session_id=${session_id}`,
    {
      media_type: "movie",
      media_id: movie_id,
      favorite: favorite
    }
  ).then(_ => returnValue = true )
  .catch(_ => returnValue = false );
  return returnValue;
}