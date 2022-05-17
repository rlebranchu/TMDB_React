import React, { Props, useEffect, useState } from "react";
import {
  Text,
  View,
} from "react-native";
import { MovieDetailsScreenProps, MovieModel } from "../../types/interfaces";
import MovieDetailsStyle from "./movie_details_style";

const MovieDetailsScreen : React.FC<MovieDetailsScreenProps> = ({navigation, route}) => {

  const movie : MovieModel = route.params.movie;
    
  return (
    <View style={MovieDetailsStyle.pageContainer}>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MovieDetailsScreen;