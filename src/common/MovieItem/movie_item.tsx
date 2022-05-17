import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { TMBD_IMAGE_URL } from "../../api/const";
import { MovieModel, ListMovieItemProps } from "../../types/interfaces";
import MovieItemStyle from "./movie_item_style";

const ListMovieItem: React.FC<ListMovieItemProps> = ({item, onMoviePress}) => (
  <TouchableOpacity onPress={() => {onMoviePress()}}>
    <MovieItem id={item.id} title={item.title} imageUrl={item.imageUrl} voteAverage={item.voteAverage} dateRelease={item.dateRelease} />
  </TouchableOpacity>
);

const MovieItem: React.FC<MovieModel> =  ({id, title, imageUrl, voteAverage, dateRelease}) => {
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