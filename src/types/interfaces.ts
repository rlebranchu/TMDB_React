import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Type of information of user connected
type TMDBToken = {
    account_id: string,
    token: string,
    expires_at: Date,
    session_id: string
}

// Smallest Type for Movie Data
type TMDBMovieBase = {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number,
    release_date: Date
}

// Global Type for Movie
type TMDBMovieData = TMDBMovieBase & {
    backdrop_path: string,
    homepage: string,
    favorite: boolean,
    overview: string,
    popularity: number,
    production_companies: MovieProductor[],
    revenue: number,
    status: string, 
    video: string,
    vote_count: number,
    similarMovies: TMDBMovieBase[]
}

// Type used on result of call to fetch List Movie
type TMDBMovieList = TMDBMovieBase & {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    original_language: string,
    original_title:string,
    overview: string,
    popularity:number,
    vote_count: number
}

// Type For List Movie Item 
type ListMovieItemProps = {
    item : TMDBMovieBase,
    onMoviePress: Function
}

// Type for Production Company of movie
type MovieProductor = {
    id: string,
    logo_path: string,
    name: string,
    country: string,
}

// Type returned by API on fetch video linked to movie
type Video = {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: Date,
    id: string
}

// Type of Error during Login
type LoginError = {
    error_code: number,
    error_message: string
}

type LoginReturnType = LoginError | TMDBToken;

// Function which return if obj passe din parameter is type of LoginError
const isLoginError = (obj: LoginReturnType): obj is LoginError  => {
    if((obj as LoginError).error_code){
        return true
    }
    return false
}

// types for Navigation
type RootStackParamList = {
    Login: undefined,
    Home: undefined,
    MovieDetails: { movie: TMDBMovieBase }
}
type LoginScreenProps=NativeStackScreenProps<RootStackParamList,'Login'>;
type HomeScreenProps=NativeStackScreenProps<RootStackParamList, 'Home'>;
type MovieDetailsScreenProps=NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export {TMDBToken, TMDBMovieBase, ListMovieItemProps, TMDBMovieList, TMDBMovieData, MovieProductor, Video, RootStackParamList, LoginScreenProps, HomeScreenProps, MovieDetailsScreenProps, LoginReturnType, LoginError, isLoginError};