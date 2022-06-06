import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const HomeStyle = StyleSheet.create({
    pageContainer: {},
    titleContainer: {
      height: Spacing.screenHeight*0.25,
      fontWeight: "900",
      flexDirection: 'row',
      paddingHorizontal:20
    },
    titleLeftContainer:{
      flex: 2,
      height:"100%"
    },
    titleCenterContainer:{
      flex:5,
      alignContent: 'center',
      justifyContent: "center",
      height:"100%",
      flexDirection: 'column',
      alignItems: 'center'
    },
    imageTitle: {
      marginTop: 45,
      width: 100,
      height: 100 ,
    },
    appTitle: {
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 25,
      fontWeight: '700'
    },
    titleRightContainer:{
      flex: 2,
      height:"100%",
      flexDirection: 'row-reverse'
    },
    logoutButton:{
      alignItems:'center',
      justifyContent:'center',
      width: 40,
      height: 40,
      marginTop: 50,
      backgroundColor: Colors.LIGHT,
      borderRadius:15,
      shadowColor: Colors.DARK,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    logoutIcon:{
      width:"50%",
      height:"50%",
    },
    searchContainer: {
      width: "100%",
      marginBottom: 15,
      alignItems:'center',
      paddingHorizontal:20
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