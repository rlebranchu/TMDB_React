import { Dimensions, StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const MOVIE_RATIO = Spacing.screenHeight*0.45;

const MovieItemStyle = StyleSheet.create({
    productorName:{
        borderWidth: 1,
        borderColor: "#AAAAAA",
        borderRadius: 8,
        paddingVertical: 2,
        paddingHorizontal: 5,
        fontWeight: '500'
      }
});

export default MovieItemStyle;