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

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {

  const [listMovie, setListMovie] = useState<TMDBMovieBase[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {state, setState} = useGlobalState();

  useEffect(() => {
    _fetchMoviesBySearch();
  }, [search]);

  const _fetchMoviesBySearch = () => {
    setLoading(true);
    fetchMovies(search).then((data: TMDBMovieList[]) => {
      const listMovies: TMDBMovieBase[] = data.map((item: TMDBMovieList) : TMDBMovieBase => {
        const movie : TMDBMovieBase = {
          id: item.id,
          title: item.title,
          poster_path: item.poster_path,
          vote_average: item.vote_average,
          release_date: new Date(item.release_date)
        };
        return movie;
      });
      setListMovie(listMovies);
      // set loading to false after movies are fetched.
      setLoading(false);
    });
  }

  const _onMoviePress = (movie: TMDBMovieBase) => {
    navigation.navigate('MovieDetails', { movie: movie });
  }

  const _onPressLogout = () => {
    tryTMDBLogout(state.session_id!);
    setState({token: '', expires_at: new Date(), session_id: '' });
    navigation.goBack();
  }

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
    <View style={HomeStyle.pageContainer}>
      <View style={HomeStyle.titleContainer}>
        <View style={HomeStyle.titleLeftContainer}></View>
        <View style={HomeStyle.titleCenterContainer}>
          <Image source={require('./../../../assets/adaptive-icon.png')} style={HomeStyle.imageTitle} /> 
          <Text style={HomeStyle.appTitle}>TMDB React</Text>    
        </View>
        <View style={HomeStyle.titleRightContainer}>
          <TouchableOpacity style={HomeStyle.logoutButton} onPress={_onPressLogout}>
              <Image source={require('./../../../assets/logout.png')} style={HomeStyle.logoutIcon} />
            </TouchableOpacity>
        </View>
      </View>
      <View style={HomeStyle.searchContainer}>
        <TextInput
              style={HomeStyle.searchText}
              defaultValue={search}
              onChangeText={(text) => setSearch(text)}
              placeholder="Search a specific movie" />
      </View>
      {showLoadingOrListMovies} 
    </View>
  );
};

export default HomeScreen;