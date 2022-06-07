import { Dimensions, ViewStyle } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Global Shadow style
const shadowStyle: ViewStyle = {
    shadowColor: Colors.DARK,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
}

// GLOBAL STYLE 
// It contains all the style specifications used in the whole application
export const GlobalStyle = {
  borderRadius: 34,
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  spacingHorizontal: 20,
  shadow: shadowStyle
};