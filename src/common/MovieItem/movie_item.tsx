import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { TMBD_IMAGE_URL } from "../../api/const";
import { TMDBMovieBase, ListMovieItemProps } from "../../types/interfaces";
import MovieItemStyle from "./movie_item_style";

// Component to render touchable the SimilarMovieItem
const ListMovieItem: React.FC<ListMovieItemProps> = ({item, onMoviePress}) => (
  <TouchableOpacity onPress={() => {onMoviePress()}}>
    <MovieItem id={item.id} title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} release_date={item.release_date} />
  </TouchableOpacity>
);

// Little Component which present poster, title of the movie, its year and its note average
const MovieItem: React.FC<TMDBMovieBase> =  ({id, title, poster_path, vote_average, release_date}) => {
  return (
    <View style={MovieItemStyle.itemContainer}>
      <View style={MovieItemStyle.movieContainer}>
        <Image source={{uri: TMBD_IMAGE_URL + poster_path}} style={MovieItemStyle.posterImage}/>
        <View style={MovieItemStyle.movieDescription}>
          <Text style={MovieItemStyle.movieTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={MovieItemStyle.movieSubtitle} numberOfLines={2}>
            {vote_average}/10 - {release_date.getFullYear()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListMovieItem;