import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import HomeScreen from "./src/views/home/home_screen";
import {useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_700Bold, Montserrat_900Black} from "@expo-google-fonts/montserrat";

const Styles = StyleSheet.create({
  statusBarContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "black",
  },
});

export default function App() {
  let [fontLoaded, error] = useFonts({
    Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_700Bold, Montserrat_900Black
  });

  return (
    <>
      <HomeScreen />
    </>
  );
}