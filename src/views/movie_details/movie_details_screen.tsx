import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  Linking,
} from "react-native";
import { TMBD_IMAGE_URL } from "../../api/const";
import "../../utils/date_utils";
import { fetchDatabyMovieID, markFavoriteMovie } from "../../api/services";
import Loading from "../../common/Loading/loading";
import ProductionItem from "../../common/ProductionItem/production_item";
import { MovieDetailsScreenProps, TMDBMovieData } from "../../types/interfaces";
import MovieDetailsStyle from "./movie_details_style";
import { useGlobalState } from "../../../GlobalState";

const MovieDetailsScreen : React.FC<MovieDetailsScreenProps> = ({navigation, route}) => {

  const [movie, setMovie] = useState<TMDBMovieData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const {state} = useGlobalState();

  useEffect(() => {
      setLoading(true);
      fetchDatabyMovieID(route.params.movie.id, state.session_id!).then((data: TMDBMovieData) => {
        setMovie(data);
        // set loading to false after movies are fetched.
        setLoading(false);
      });
  },[]);

  const _onPressReturn = () => {
    navigation.goBack();
  }

  const _onPressFavorite = () => {
    markFavoriteMovie(!movie!.favorite, state.account_id!, movie!.id, state.session_id!);
    setMovie({...movie!, favorite: !movie!.favorite });
  }

  const _onPressYoutubeButton = () => {
    Linking.openURL("https://youtube.com/watch?v="+ movie!.video);
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
          resizeMode="cover" 
          style={MovieDetailsStyle.backdrop}>
            <View style={MovieDetailsStyle.headerContainer}>
              <TouchableOpacity style={MovieDetailsStyle.returnButton} onPress={_onPressReturn}>
                <Image source={require('./../../../assets/left_icon.png')} style={MovieDetailsStyle.returnIcon} />
              </TouchableOpacity>
            </View>
            <View style={MovieDetailsStyle.movieContainer}>
              <View style={MovieDetailsStyle.detailsContainer}>
                <View style={MovieDetailsStyle.movieTopContainer}>
                  <View style={MovieDetailsStyle.leftPopularityContainer}>
                    <Text>{movie.vote_average}/10</Text>
                    <Text style={MovieDetailsStyle.separatorText}>-</Text>
                    <Text style={MovieDetailsStyle.dayMonthReleaseDateText}>{movie.release_date.getDay()} {movie.release_date.getMonthShortWord()}</Text>
                    <Text style={MovieDetailsStyle.yearReleaseDateText}>{movie.release_date.getFullYear()}</Text>
                  </View>
                  <View style={MovieDetailsStyle.centerPosterContainer}>
                    <View style={MovieDetailsStyle.posterContainer}>
                      <Image source={{uri: TMBD_IMAGE_URL+movie.poster_path}} style={MovieDetailsStyle.posterImage}/>
                    </View>
                  </View>
                  <View style={MovieDetailsStyle.rightPopularityContainer}>
                    <TouchableOpacity onPress={_onPressFavorite}>
                      {movie.favorite ? 
                        <Image source={require('./../../../assets/star.png')} style={MovieDetailsStyle.starIcon} />
                        :
                        <Image source={require('./../../../assets/star_empty.png')} style={MovieDetailsStyle.starIcon} />
                      }
                    </TouchableOpacity>
                    { movie.video != "" ?
                      <TouchableOpacity onPress={_onPressYoutubeButton}>
                        <Image source={require('./../../../assets/youtube.png')} style={MovieDetailsStyle.youtubeIcon} />
                      </TouchableOpacity>
                      : null 
                    }
                  </View>
                </View>
                <View style={MovieDetailsStyle.descriptionContainer}>
                  <Text style={MovieDetailsStyle.movieTitle}  numberOfLines={2}>{movie.title}</Text>
                  { movie.production_companies.length > 0 ? 
                  <View style={MovieDetailsStyle.productionContainer}>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      data={movie.production_companies}
                      horizontal
                      contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                      renderItem={({item}) => <ProductionItem productor={item}/>}
                      ItemSeparatorComponent={(_) => {
                        return (<View style={{width: 10}} />);
                      }}
                    />
                  </View> : null}
                  <View style={MovieDetailsStyle.overviewContainer}>
                    <Text style={MovieDetailsStyle.overviewText}>{movie.overview}</Text>
                  </View>
                </View>
              </View>
            </View>
        </ImageBackground>
      </View>
    ) : <Text>No movie found ...</Text>
  ;
};

export default MovieDetailsScreen;