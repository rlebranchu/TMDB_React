import React, { useState } from "react";
import {useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/views/home/home_screen";
import LoginScreen from "./src/views/login/login_screen";
import MovieDetailsScreen from "./src/views/movie_details/movie_details_screen";
import { RootStackParamList, TMDBToken } from "./src/types/interfaces";
import { GlobalStateProvider } from "./GlobalState";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontLoaded, error] = useFonts({
    Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}