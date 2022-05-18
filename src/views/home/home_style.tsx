import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const HomeStyle = StyleSheet.create({
    pageContainer: {
      width: Spacing.screenWidth,
      height: Spacing.screenHeight,
      ...Spacing.largePadding
    },
    titleContainer: {
      width: "100%",
      height: Spacing.screenHeight*0.25,
      fontWeight: "900",
      alignItems:'center',
    },
    imageTitle: {
      marginTop: 45,
      width: 100,
      height: 100 
    },
    appTitle: {
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 25,
      fontWeight: '700',
    },
    searchContainer: {
      width: "100%",
      marginBottom: 15,
      alignItems:'center'
    },
    listMovieContainer: {
      width: Spacing.screenWidth,
      height: Spacing.screenHeight*0.7
    },
    listMovieItems:{
      alignItems:'center',
    },
    searchText: {
      shadowColor: Colors.DARK,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
      backgroundColor: Colors.LIGHT,
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 14,
      borderRadius: 25,
      borderColor: Colors.DARK,
      width: "100%",
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontWeight: '400'
    },
});

export default HomeStyle;