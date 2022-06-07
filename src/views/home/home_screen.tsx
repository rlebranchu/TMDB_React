import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HomeStyle from "./home_style";
import MovieItem from "../../common/MovieItem/movie_item";
import { fetchMovies, tryTMDBLogout } from "../../api/services";
import Loading from "../../common/Loading/loading";
import { HomeScreenProps, TMDBMovieBase, TMDBMovieList } from "../../types/interfaces";
import { useGlobalState } from "../../../GlobalState";
import ErrorModal from "../../common/Error/error_modal";

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {

  // Initial State of the screen
  const [listMovie, setListMovie] = useState<TMDBMovieBase[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {state, setState} = useGlobalState();

  // Hook on each search state change to refresh list movie
  useEffect(() => {
    _fetchMoviesBySearch();
  }, [search]);

  // Fetch List of movie 
  const _fetchMoviesBySearch = () => {
    setLoading(true);
    fetchMovies(search).then((data: TMDBMovieList[] | undefined) => {
      // If Call of API is correct
      if(data){
        // Creation of the list of movie
        const listMovies: TMDBMovieBase[] = data.map((item: TMDBMovieList) : TMDBMovieBase => {
          // Creation of object TMDBMovieBase
          const movie : TMDBMovieBase = {
            id: item.id,
            title: item.title,
            poster_path: item.poster_path,
            vote_average: item.vote_average,
            release_date: new Date(item.release_date)
          };
          return movie;
        });
        // Set list of movies's state
        setListMovie(listMovies);
        // set loading to false after movies are fetched.
        setLoading(false);
        setError(false);
      } else {
        // If Call of API is incorrect
        setError(true);
      }
    });
  }

  // Show Movie Details
  const _onMoviePress = (movie: TMDBMovieBase) => {
    navigation.push('MovieDetails', { movie: movie });
  }

  // Function to Logout and return on Login page
  const _onPressLogout = () => {
    tryTMDBLogout(state.session_id!);
    setState({account_id: '', token: '', expires_at: new Date(), session_id: '' });
    navigation.goBack();
  }

  // Show Loading during fetch of the list of movie
  const showLoadingOrListMovies = 
    loading ? 
      <Loading />
    :
      <View style={HomeStyle.listMovieContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listMovie}
          horizontal
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          renderItem={({item}) => <MovieItem item={item} onMoviePress={() => _onMoviePress(item)}/>}
          keyExtractor={item => item.id}
        />
      </View>
  ;

  return (
    listMovie ?
      <View style={HomeStyle.pageContainer}>
        <View style={HomeStyle.titleContainer}>
          <View style={HomeStyle.titleLeftContainer}></View>
          {/* Header of the Home page : Logo + Title */}
          <View style={HomeStyle.titleCenterContainer}>
            <Image source={require('./../../../assets/adaptive-icon.png')} style={HomeStyle.imageTitle} /> 
            <Text style={HomeStyle.appTitle}>TMDB React</Text>    
          </View>
          {/* Logout button */}
          <View style={HomeStyle.titleRightContainer}>
            <TouchableOpacity style={HomeStyle.logoutButton} onPress={_onPressLogout}>
                <Image source={require('./../../../assets/logout.png')} style={HomeStyle.logoutIcon} />
              </TouchableOpacity>
          </View>
        </View>
        {/* Search input */}
        <View style={HomeStyle.searchContainer}>
          <TextInput
                style={HomeStyle.searchText}
                defaultValue={search}
                onChangeText={(text) => setSearch(text)}
                placeholder="Search a specific movie" />
        </View>
        {showLoadingOrListMovies} 
      </View>
    : 
     /* ErrorModal if fetch list movie is wrong */
     <ErrorModal onPressPrevious={_onPressLogout}/> 
  );
};

export default HomeScreen;