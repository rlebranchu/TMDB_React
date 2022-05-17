import React from "react";
import {
  Text,
  Image,
  View,
} from "react-native";
import { TMBD_IMAGE_URL } from "../../api/const";
import { MovieItemProps, ListMovieItemProps } from "../../types/interfaces";
import MovieItemStyle from "./movie_item_style";

const ListMovieItem: React.FC<ListMovieItemProps> = ({item}) => (
  <MovieItem id={item.id} title={item.title} imageUrl={item.imageUrl} voteAverage={item.voteAverage} dateRelease={item.dateRelease}/>
);

const MovieItem: React.FC<MovieItemProps> =  ({id, title, imageUrl, voteAverage, dateRelease}) => {
  return (
    <View style={MovieItemStyle.itemContainer}>
      <View style={MovieItemStyle.movieContainer}>
        <Image source={{uri: TMBD_IMAGE_URL + imageUrl}} style={MovieItemStyle.posterImage}/>
        <View style={MovieItemStyle.movieDescription}>
          <Text style={MovieItemStyle.movieTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={MovieItemStyle.movieSubtitle} numberOfLines={2}>
            {voteAverage}/10 - {dateRelease.getFullYear()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListMovieItem;