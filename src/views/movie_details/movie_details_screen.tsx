import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  Linking,
  ScrollView,
} from "react-native";
import { TMBD_IMAGE_URL } from "../../api/const";
import "../../utils/date_utils";
import { fetchDatabyMovieID, markFavoriteMovie } from "../../api/services";
import Loading from "../../common/Loading/loading";
import ProductionItem from "../../common/ProductionItem/production_item";
import { MovieDetailsScreenProps, TMDBMovieBase, TMDBMovieData } from "../../types/interfaces";
import MovieDetailsStyle from "./movie_details_style";
import { useGlobalState } from "../../../GlobalState";
import SimilarMovieItem from "../../common/SimilarMovieItem/similar_movie_item";

const MovieDetailsScreen : React.FC<MovieDetailsScreenProps> = ({navigation, route}) => {

  const [movie, setMovie] = useState<TMDBMovieData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {state} = useGlobalState();

  useEffect(() => {
      setLoading(true);
      fetchDatabyMovieID(route.params.movie.id, state.session_id!).then((data: TMDBMovieData | undefined) => {
        if(data){
          setMovie(data);
          setError(false);
        } else {
          setError(true);
        }
        setLoading(false);
      });
  },[]);

  const _onPressReturn = () => {
    navigation.goBack();
  }

  const _onMoviePress = (movie: TMDBMovieBase) => {
    navigation.push('MovieDetails', { movie: movie });
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
            <View style={MovieDetailsStyle.previousContainer}>
              <TouchableOpacity style={MovieDetailsStyle.returnButton} onPress={_onPressReturn}>
                <Image source={require('./../../../assets/left_icon.png')} style={MovieDetailsStyle.returnIcon} />
              </TouchableOpacity>
            </View>
            <View style={MovieDetailsStyle.movieContainer}>
              <View style={MovieDetailsStyle.headerContainer}>
                <View style={MovieDetailsStyle.headerTopContainer}>
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
                  <View style={MovieDetailsStyle.rightContainer}>
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
                <View style={MovieDetailsStyle.titleContainer}>
                  <Text style={MovieDetailsStyle.movieTitle} numberOfLines={2}>{movie.title}</Text>
                </View>
              </View>
              <View style={MovieDetailsStyle.detailsContainer}>
                <ScrollView style={MovieDetailsStyle.descriptionContainer} showsVerticalScrollIndicator={false}>
                  <View style={MovieDetailsStyle.topDescriptionContainer}>
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
                      </View>
                    : null}
                    {movie.overview != '' ?
                      <View style={MovieDetailsStyle.overviewContainer}>
                        <Text style={MovieDetailsStyle.overviewText}>{movie.overview}</Text>
                      </View>
                    : null }
                  </View>
                  { movie.similarMovies.length > 0 ? 
                    <View style={MovieDetailsStyle.similarMovieContainer}>
                      <Text style={MovieDetailsStyle.similarMovieTitle}>Similar Movies</Text>
                      <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={movie.similarMovies}
                        horizontal
                        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                        renderItem={({item}) => <SimilarMovieItem item={item} onMoviePress={() => _onMoviePress(item)}/>}
                      />
                    </View> 
                  : null }
                </ScrollView>
              </View>
              <View style={{flex:1}}/>
            </View>
        </ImageBackground>
      </View>
    ) : <Text>No movie found ...</Text>
  ;
};

export default MovieDetailsScreen;