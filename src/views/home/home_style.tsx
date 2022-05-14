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
    appTitle: {
      color: Colors.DARK_NORMALTEXT,
      fontSize: 40,
      fontWeight: 'bold',
    },
    titleContainer: {
      flex: 1,
      fontFamily: "Montserrat_900Black",
      alignItems:'center',
    },
    searchContainer: {
      flex: 1,
      alignItems:'center',
    },
    listMovieContainer: {
      flex: 1,
      alignItems:'center',
    },
    inputPromptContainer: {
      flex: 4,
    },
    enterANumberText: {
      color: Colors.PRIMARY,
      fontSize: 24,
      fontWeight: 'bold',
    },
    inputContainer: {
      ...Spacing.marginVertical,
      ...Spacing.padding,
      backgroundColor: Colors.LIGHT,
      color: "black",
      fontSize: 18,
      borderRadius: 8,
      borderColor: "gray",
      width: "100%",
      borderWidth: 1,
      padding: 10,
    },
    feedbackContainer: {
      flexDirection: "row",
      width: "100%",
    },
    feedbackButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    feebackButtonText: {
      fontSize: 30,
      fontWeight: "bold",
    },
});

export default HomeStyle;