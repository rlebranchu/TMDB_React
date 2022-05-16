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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    imageUrl: 'https://images.affiches-et-posters.com//albums/3/56170/affiche-film-joker.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    imageUrl: 'https://images.affiches-et-posters.com//albums/3/56170/affiche-film-joker.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    imageUrl: 'https://images.affiches-et-posters.com//albums/3/56170/affiche-film-joker.jpg',
  },
];

const HomeScreen: React.FC = () => {

  const [listMovie, setListMovie] = useState([] as MovieItemProps[]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovies(search).then((data: TMBDMovie[]) => {
      const listMovies: MovieItemProps[] = data.map((item: TMBDMovie) : MovieItemProps => {
        const movie : MovieItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.poster_path,
        };
        return movie;
      });
      setListMovie(listMovies);
      // set loading to false after movies are fetched.
      setLoading(false);
    });
  }, [search]);

  return loading ? (
    <Loading />
  ) : (
    <View style={HomeStyle.pageContainer}>
      <View style={HomeStyle.titleContainer}>
        <Image source={require('./../../../assets/icon.png')} style={{ width: 150, height: 150 }} /> 
        <Text style={HomeStyle.appTitle}>TMBD React</Text>
      </View>
      <View style={HomeStyle.searchContainer}>
        <TextInput
              style={HomeStyle.searchText}
              value={search}
              onChangeText={(text) => setSearch(text)}
              placeholder="Search a specific movie" />
      </View>
      <View style={HomeStyle.listMovieContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listMovie}
          horizontal
          renderItem={MovieItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={HomeStyle.bottomContainer}/>
    </View>
  );
};

export default HomeScreen;