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
import ErrorModal from "../../common/Error/error_modal";

const MovieDetailsScreen : React.FC<MovieDetailsScreenProps> = ({navigation, route}) => {
  
  // Initial State of the screen
  const [movie, setMovie] = useState<TMDBMovieData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const {state} = useGlobalState();

  // Hook only on start to load all informations of the movie to show
  useEffect(() => {
      // Start loading
      setLoading(true);
      // Call API to get all information of the movie
      // Param : 1 - Id of the movie | 2 - the id session (user logged) to get favorite movies
      fetchDatabyMovieID(route.params.movie.id, state.session_id!).then((data: TMDBMovieData | undefined) => {
        // Set state with informations : if undefined -> show ErrorModal
        setMovie(data);
        // Stop loading
        setLoading(false);
      });
  },[]);

  // Triggered on previous button click
  const _onPressPrevious = () => {
    // Return on previous page : other movie or Home page
    navigation.goBack();
  }

  // Show similar movie item : open a overwise screen
  const _onMoviePress = (movie: TMDBMovieBase) => {
    navigation.push('MovieDetails', { movie: movie });
  }

  // Call API to set the current movie to favorite movie
  const _onPressFavorite = () => {
    markFavoriteMovie(!movie!.favorite, state.account_id!, movie!.id, state.session_id!).then((goodExecution: boolean) => {
      // Modify state only if the call of API had good execution
      if(goodExecution)
        setMovie({...movie!, favorite: !movie!.favorite });
    });
  }

  // Open Youtube Application on YoutubeIcon click
  const _onPressYoutubeButton = () => {
    Linking.openURL("https://youtube.com/watch?v="+ movie!.video);
  }

  return loading ?
      // Hide Screen Content during loading
      <Loading/> 
    :
    movie ?
    (
      <View style={MovieDetailsStyle.pageContainer}>
        {/* Show Second Poster on background of screen */} 
        <ImageBackground 
          blurRadius={2} 
          source={{ uri: TMBD_IMAGE_URL+movie.backdrop_path}} 
          resizeMode="cover" 
          style={MovieDetailsStyle.backdrop}>
            {/* Show the previous button */}             
            <View style={MovieDetailsStyle.previousContainer}>
              <TouchableOpacity style={MovieDetailsStyle.returnButton} onPress={_onPressPrevious}>
                <Image source={require('./../../../assets/left_icon.png')} style={MovieDetailsStyle.returnIcon} />
              </TouchableOpacity>
            </View>
            <View style={MovieDetailsStyle.movieContainer}>
              <View style={MovieDetailsStyle.headerContainer}>
                <View style={MovieDetailsStyle.headerTopContainer}>
                  {/* Container on left of the poster : Note average and Release Date */}           
                  <View style={MovieDetailsStyle.leftPopularityContainer}>
                    <Text>{movie.vote_average}/10</Text>
                    <Text style={MovieDetailsStyle.separatorText}>-</Text>
                    <Text style={MovieDetailsStyle.dayMonthReleaseDateText}>{movie.release_date.getDay()} {movie.release_date.getMonthShortWord()}</Text>
                    <Text style={MovieDetailsStyle.yearReleaseDateText}>{movie.release_date.getFullYear()}</Text>
                  </View>
                  {/* Container of the poster */}
                  <View style={MovieDetailsStyle.centerPosterContainer}>
                    <View style={MovieDetailsStyle.posterContainer}>
                      <Image source={{uri: TMBD_IMAGE_URL+movie.poster_path}} style={MovieDetailsStyle.posterImage}/>
                    </View>
                  </View>
                  {/* Container on right of the poster : Star icon for favorite status + Youtube Icon */}
                  <View style={MovieDetailsStyle.rightContainer}>
                    <TouchableOpacity onPress={_onPressFavorite}>
                      {/* If Not favorite Movie : star is empty 
                          If Favorite Movie : star is fully yellow */}
                      {movie.favorite ? 
                        <Image source={require('./../../../assets/star.png')} style={MovieDetailsStyle.starIcon} />
                        :
                        <Image source={require('./../../../assets/star_empty.png')} style={MovieDetailsStyle.starIcon} />
                      }
                    </TouchableOpacity>
                    {/* Show Youtube Icon only if video to show is found */}
                    { movie.video != "" ?
                      <TouchableOpacity onPress={_onPressYoutubeButton}>
                        <Image source={require('./../../../assets/youtube.png')} style={MovieDetailsStyle.youtubeIcon} />
                      </TouchableOpacity>
                      : null 
                    }
                  </View>
                </View>
                <View style={MovieDetailsStyle.titleContainer}>
                  {/* Autorise two lines for long title */}
                  <Text style={MovieDetailsStyle.movieTitle} numberOfLines={2}>{movie.title}</Text>
                </View>
              </View>
              <View style={MovieDetailsStyle.detailsContainer}>
                {/* Active Scrolling for details : overview */}
                <ScrollView style={MovieDetailsStyle.descriptionContainer} showsVerticalScrollIndicator={false}>
                  <View style={MovieDetailsStyle.topDescriptionContainer}>
                    {/* Show list of production company only if exist */}
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
                    {/* Show Overview of the movie only if exist */}
                    {movie.overview != '' ?
                      <View style={MovieDetailsStyle.overviewContainer}>
                        <Text style={MovieDetailsStyle.overviewText}>{movie.overview}</Text>
                      </View>
                    : null }
                  </View>
                  {/* Show List of similar movie only if exist */}
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
            </View>
        </ImageBackground>
      </View>
    ) : <ErrorModal onPressPrevious={_onPressPrevious}/>
  ;
};

export default MovieDetailsScreen;