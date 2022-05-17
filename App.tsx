import React from "react";
import HomeScreen from "./src/views/home/home_screen";
import {useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsScreen from "./src/views/movie_details/movie_details_screen";
import { RootStackParamList } from "./src/types/interfaces";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontLoaded, error] = useFonts({
    Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}