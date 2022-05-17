import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const MovieDetailsStyle = StyleSheet.create({
    pageContainer: {
      width: Spacing.windowWidth,
      height: Spacing.windowHeight,
      backgroundColor: Colors.LIGHT,
      ...Spacing.largePadding,
      flexDirection: 'column'
    }
});

export default MovieDetailsStyle;