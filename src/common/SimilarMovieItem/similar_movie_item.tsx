import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { TMBD_IMAGE_URL } from "../../api/const";
import { TMDBMovieBase, ListMovieItemProps } from "../../types/interfaces";
import SimilarMovieItemStyle from "./similar_movie_item_style";

const ListSimilarMovieMovieItem: React.FC<ListMovieItemProps> = ({item, onMoviePress}) => (
  <TouchableOpacity onPress={() => {onMoviePress()}}>
    <SimilarMovieItem id={item.id} title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} release_date={item.release_date} />
  </TouchableOpacity>
);

const SimilarMovieItem: React.FC<TMDBMovieBase> =  ({id, title, poster_path, vote_average, release_date}) => {
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