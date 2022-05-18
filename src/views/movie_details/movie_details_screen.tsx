import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TMBD_IMAGE_URL } from "../../api/const";
import { fetchDatabyMovieID } from "../../api/services";
import Loading from "../../common/Loading/loading";
import { MovieDetailsScreenProps, TMDBMovieData } from "../../types/interfaces";
import MovieDetailsStyle from "./movie_details_style";

const MovieDetailsScreen : React.FC<MovieDetailsScreenProps> = ({navigation, route}) => {

  const [movie, setMovie] = useState<TMDBMovieData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
      setLoading(true);
      fetchDatabyMovieID(route.params.movie.id).then((data: TMDBMovieData) => {
        setMovie(data);
        // set loading to false after movies are fetched.
        setLoading(false);
      });
  },[]);

  const _onPressReturn = () => {
    navigation.navigate('Home');
  }

  return loading ?
      <Loading/> 
    :
    movie ?
    (
      <View style={MovieDetailsStyle.pageContainer}>
        <ImageBackground 
          blurRadius={2} 
          source={{ uri: TMBD_IMAGE_URL+movie.backdrop_path}} 
          resizeMode="cover" style={MovieDetailsStyle.backdrop}>
            <View style={MovieDetailsStyle.headerContainer}>
            <TouchableOpacity
                style={MovieDetailsStyle.returnButton} onPress={_onPressReturn}
              >
                <Image source={require('./../../../assets/left_icon.png')} style={MovieDetailsStyle.returnIcon} />
              </TouchableOpacity>
            </View>
            <View style={MovieDetailsStyle.movieContainer}>
              <View style={MovieDetailsStyle.detailsContainer}><Text style={MovieDetailsStyle.movieTitle}>{movie.title}</Text></View>
              <View style={MovieDetailsStyle.posterContainer}>
                <Image source={{uri: TMBD_IMAGE_URL+movie.poster_path}} style={MovieDetailsStyle.posterImage}/>
              </View>
            </View>
        </ImageBackground>
      </View>
    ) : <Text>No movie found ...</Text>
  ;
};

export default MovieDetailsScreen;