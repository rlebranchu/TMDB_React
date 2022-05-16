import React from "react";
import {
  Text,
  Image,
  View,
} from "react-native";
import { MovieItemProps, ListMovieItemProps } from "../../types/interfaces";
import MovieItemStyle from "./movie_item_style";

const ListMovieItem: React.FC<ListMovieItemProps> = ({item}) => (
  <MovieItem id={item.id} title={item.title} imageUrl={item.imageUrl}/>
);

const MovieItem: React.FC<MovieItemProps> =  ({id, title, imageUrl}) => {
  return (
    <View style={MovieItemStyle.itemContainer}>
      <View style={MovieItemStyle.movieContainer}>
        <Image source={{uri: imageUrl}} style={MovieItemStyle.posterImage}/>
        <Text style={MovieItemStyle.movieTitle} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default ListMovieItem;