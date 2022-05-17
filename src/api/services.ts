import axios from 'axios';
import { MovieItemProps,TMBDMovie} from '../types/interfaces';

import { URL, API_KEY } from './const';

export const fetchMovies = async (search: string) : Promise<TMBDMovie[]> => {
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