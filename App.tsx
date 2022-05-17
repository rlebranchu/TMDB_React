import React from "react";
import HomeScreen from "./src/views/home/home_screen";
import {useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontLoaded, error] = useFonts({
    Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <HomeScreen />
    </>
  );
}