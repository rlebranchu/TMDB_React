import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import { GlobalStyle } from "../../theme/styles";

/* Style of Home Page */
const HomeStyle = StyleSheet.create({
    pageContainer: {},
    titleContainer: {
      height: GlobalStyle.screenHeight*0.25,
      fontWeight: "900",
      flexDirection: 'row',
      paddingHorizontal: GlobalStyle.spacingHorizontal
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
      ...GlobalStyle.shadow
    },
    logoutIcon:{
      width:"50%",
      height:"50%",
    },
    searchContainer: {
      width: "100%",
      marginBottom: 15,
      alignItems:'center',
      paddingHorizontal: GlobalStyle.spacingHorizontal
    },
    listMovieContainer: {
      width: GlobalStyle.screenWidth,
      height: GlobalStyle.screenHeight*0.7
    },
    listMovieItems:{
      alignItems:'center',
    },
    searchText: {
      ...GlobalStyle.shadow,
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