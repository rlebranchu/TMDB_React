import React from "react";
import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import HomeStyle from "./home_style";
import logo from './../../../assets/icon.png';
import MovieItem from "../../common/movie_item";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={HomeStyle.pageContainer}>
      <View style={HomeStyle.titleContainer}>
        <Image source={logo} style={{ width: 150, height: 150 }} /> 
        <Text style={HomeStyle.appTitle}>TMBD React</Text>
      </View>
      <View style={HomeStyle.searchContainer}>
        <TextInput
              style={HomeStyle.inputContainer}
              placeholder="Search a specific movie" />
      </View>
      <SafeAreaView style={HomeStyle.listMovieContainer}>
        <FlatList
          data={DATA}
          renderItem={MovieItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;