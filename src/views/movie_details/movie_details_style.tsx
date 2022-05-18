import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const MovieDetailsStyle = StyleSheet.create({
    pageContainer: {
      width: Spacing.screenWidth,
      height: Spacing.screenHeight,
      backgroundColor: Colors.LIGHT,
      flexDirection: 'column'
    },
    backdrop:{
      width: "100%",
      height: "100%",
    },
    headerContainer:{
      flex:1,
      ...Spacing.largeMargin,
    },
    returnButton:{
      alignItems:'center',
      justifyContent:'center',
      width: 40,
      height: 40,
      marginTop: 50,
      backgroundColor:'#FFF',
      borderRadius:15,
      shadowColor: Colors.DARK,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    returnIcon:{
      width:"50%",
      height:"50%",
    },
    movieContainer:{
      ...Spacing.largeMargin,
      flex:50,
      marginTop: (Spacing.screenWidth*0.45)/2 +50,
      alignItems:"center",
    },
    posterContainer:{
      position: 'absolute',
      top:-(Spacing.screenWidth*0.45)/2,
      borderRadius: 24,
      borderWidth: 10,
      backgroundColor: Colors.LIGHT,
      borderColor: Colors.LIGHT,
      shadowColor: Colors.DARK,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    posterImage:{
      borderRadius: 24,
      width: Spacing.screenWidth*0.45,
      height: Spacing.screenHeight*0.3,
    },
    detailsContainer:{
      paddingTop: (Spacing.screenWidth*0.45)+20,
      backgroundColor: Colors.LIGHT,
      alignItems: "center",      
      borderRadius: 34,
      width:"100%"
    },
    movieTitle:{
      fontWeight: '700'
    }
});

export default MovieDetailsStyle;