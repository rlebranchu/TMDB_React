import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const HomeStyle = StyleSheet.create({
    pageContainer: {
      width: Spacing.windowWidth,
      height: Spacing.windowHeight,
      backgroundColor: Colors.LIGHT,
      ...Spacing.largePadding,
      flexDirection: 'column'
    },
    titleContainer: {
      width: "100%",
      height: Spacing.windowHeight*0.3,
      fontFamily: "Montserrat_900Black",
      alignItems:'center',
    },
    imageTitle: {
      marginTop: 25,
      width: 125,
      height: 125 
    },
    appTitle: {
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 25,
      fontWeight: 'bold',
    },
    searchContainer: {
      width: "100%",
      marginBottom: 15,
      alignItems:'center'
    },
    listMovieContainer: {
      width: Spacing.windowWidth,
      height: Spacing.windowHeight*0.7
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
      fontFamily: 'Montserrat_400Regular'
    },
});

export default HomeStyle;