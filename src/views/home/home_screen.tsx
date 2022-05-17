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
import { MovieItemProps, TMBDMovie } from "../../types/interfaces";

const HomeScreen: React.FC = () => {

  const [listMovie, setListMovie] = useState([] as MovieItemProps[]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMoviesBySearch();
  }, [search]);

  const fetchMoviesBySearch = () => {
    setLoading(true);
    fetchMovies(search).then((data: TMBDMovie[]) => {
      const listMovies: MovieItemProps[] = data.map((item: TMBDMovie) : MovieItemProps => {
        const movie : MovieItemProps = {
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

  const showLoadingOrListMovies = 
    loading ? 
      <Loading />
    :
      <View style={HomeStyle.listMovieContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listMovie}
          horizontal
          renderItem={MovieItem}
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