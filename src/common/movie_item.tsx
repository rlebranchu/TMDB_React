import React from "react";
import {
  Text,
  Image,
  View,
  FlatList,
} from "react-native";
import { MovieItemProps } from "../types/interfaces";

const MovieItem: React.FC<MovieItemProps>=  ({item, ...props }) => {
  return (
    <View>
      <Text >{item.title}</Text>
    </View>
  );
};

export default MovieItem;