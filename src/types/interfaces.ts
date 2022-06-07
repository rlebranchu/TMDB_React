import { NativeStackScreenProps } from "@react-navigation/native-stack";

type TMDBToken = {
    account_id: string,
    token: string,
    expires_at: Date,
    session_id: string
}

type TMDBMovieBase = {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number,
    release_date: Date
}

type ListMovieItemProps = {
    item : TMDBMovieBase,
    onMoviePress: Function
}

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

type MovieGenre = {
    id: string,
    name: string
}

type MovieProductor = {
    id: string,
    logo_path: string,
    name: string,
    country: string,
}

type TMDBMovieData = TMDBMovieBase & {
    backdrop_path: string,
    genres: MovieGenre[],
    homepage: string,
    favorite: boolean,
    overview: string,
    popularity: number,
    production_companies: MovieProductor[],
    revenue: number,
    status: string, 
    video: string,
    vote_count: number
}

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

//--> Types for Login
type LoginError = {
    error_code: number,
    error_message: string
}

type LoginReturnType = LoginError | TMDBToken;

const isLoginError = (obj: LoginReturnType): obj is LoginError  => {
    if((obj as LoginError).error_code){
        return true
    }
    return false
}

//--> types for Navigation
type RootStackParamList = {
    Login: undefined,
    Home: undefined,
    MovieDetails: { movie: TMDBMovieBase }
}

type LoginScreenProps=NativeStackScreenProps<RootStackParamList,'Login'>;
type HomeScreenProps=NativeStackScreenProps<RootStackParamList, 'Home'>;
type MovieDetailsScreenProps=NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export {TMDBToken, TMDBMovieBase, ListMovieItemProps, TMDBMovieList, TMDBMovieData, MovieProductor, Video, RootStackParamList, LoginScreenProps, HomeScreenProps, MovieDetailsScreenProps, LoginReturnType, LoginError, isLoginError};