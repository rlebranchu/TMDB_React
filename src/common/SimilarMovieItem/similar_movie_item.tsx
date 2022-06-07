import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { TMBD_IMAGE_URL } from "../../api/const";
import { ListMovieItemProps } from "../../types/interfaces";
import SimilarMovieItemStyle from "./similar_movie_item_style";

// Component to render touchable the SimilarMovieItem
const ListSimilarMovieMovieItem: React.FC<ListMovieItemProps> = ({item, onMoviePress}) => (
  <TouchableOpacity onPress={() => {onMoviePress()}}>
    <SimilarMovieItem id={item.id} title={item.title} poster_path={item.poster_path} />
  </TouchableOpacity>
);

// Little Component which present poster and title of the movie 
const SimilarMovieItem: React.FC<{id: string, title: string, poster_path: string}> =  ({id, title, poster_path}) => {
  return (
    <View style={SimilarMovieItemStyle.itemContainer}>
      <View style={SimilarMovieItemStyle.movieContainer}>
        <Image source={{uri: TMBD_IMAGE_URL + poster_path}} style={SimilarMovieItemStyle.posterImage}/>
        <View style={SimilarMovieItemStyle.movieDescription}>
          <Text style={SimilarMovieItemStyle.movieTitle} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListSimilarMovieMovieItem;