import { RouteProp, StackActionHelpers } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

interface MovieModel {
    id: string;
    title: string;
    imageUrl: string;
    voteAverage: number,
    dateRelease: Date,
}

interface ListMovieItemProps {
    item : MovieModel,
    onMoviePress: Function
}

interface TMBDMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: string,
    original_language: string,
    original_title:string,
    overview: string,
    popularity:number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

//--> typs for Navigation
type RootStackParamList = {
    Home: undefined,
    MovieDetails: { movie: MovieModel }
}
type HomeScreenProps=NativeStackScreenProps<RootStackParamList, 'Home'>;
type MovieDetailsScreenProps=NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export {MovieModel, ListMovieItemProps, TMBDMovie, RootStackParamList, HomeScreenProps, MovieDetailsScreenProps};