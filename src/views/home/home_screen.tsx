import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  Image,
  View,
  FlatList,
} from "react-native";
import HomeStyle from "./home_style";
import MovieItem from "../../common/MovieItem/movie_item";
import { fetchMovies } from "../../api/services";
import Loading from "../../common/Loading/loading";
import { HomeScreenProps, MovieModel, TMBDMovie } from "../../types/interfaces";

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {

  const [listMovie, setListMovie] = useState([] as MovieModel[]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _fetchMoviesBySearch();
  }, [search]);

  const _fetchMoviesBySearch = () => {
    setLoading(true);
    fetchMovies(search).then((data: TMBDMovie[]) => {
      const listMovies: MovieModel[] = data.map((item: TMBDMovie) : MovieModel => {
        const movie : MovieModel = {
          id: item.id,
          title: item.title,
          imageUrl: item.poster_path,
          voteAverage: item.vote_average,
          dateRelease: new Date(item.release_date)
        };
        return movie;
      });
      setListMovie(listMovies);
      // set loading to false after movies are fetched.
      setLoading(false);
    });
  }

  const _onMoviePress = (movie: MovieModel) => {
    console.log('teststetste');
    navigation.navigate('MovieDetails', { movie: movie });
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
          renderItem={({item}) => <MovieItem item={item} onMoviePress={() => _onMoviePress(item)}/>}
          keyExtractor={item => item.id}
        />
      </View>
  ;

  return (
    <View style={HomeStyle.pageContainer}>
      <View style={HomeStyle.titleContainer}>
        <Image source={require('./../../../assets/adaptive-icon.png')} style={HomeStyle.imageTitle} /> 
        <Text style={HomeStyle.appTitle}>TMBD React</Text>
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