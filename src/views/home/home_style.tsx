import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const HomeStyle = StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: Colors.DARK,
      ...Spacing.largePadding,
      flexDirection: 'column'
    },
    titleContainer: {
      flex: 2,
      fontFamily: "Montserrat_900Black",
      alignItems:'center',
    },
    appTitle: {
      color: Colors.DARK_NORMALTEXT,
      fontSize: 40,
      fontWeight: 'bold',
    },
    searchContainer: {
      flex: 1,
      alignItems:'center'
    },
    listMovieContainer: {
      flex: 5,
    },
    listMovieItems:{
      alignItems:'center',
    },
    inputPromptContainer: {
      flex: 4,
    },
    searchText: {
      margin: 30,
      backgroundColor: Colors.LIGHT,
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 18,
      borderRadius: 25,
      borderColor: "gray",
      width: "100%",
      borderWidth: 1,
      padding: 10,
      fontFamily: 'Montserrat_400Regular'
    },
    topContainer: {
      flex:1,
    },
    bottomContainer: {
      flex:1,
    },
});

export default HomeStyle;