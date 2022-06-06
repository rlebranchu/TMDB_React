import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const POSTER_WIDTH = Spacing.screenWidth*0.45;
const POSTER_HEIGHT = Spacing.screenHeight*0.3;

const MovieDetailsStyle = StyleSheet.create({
    pageContainer: {
      width: Spacing.screenWidth,
      height: Spacing.screenHeight,
      backgroundColor: Colors.DARK,
      flexDirection: 'column',
    },
    backdrop:{
      width: "100%",
      height: "100%",
      backgroundColor: Colors.DARK
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
      backgroundColor: Colors.LIGHT,
      borderRadius:15,
    },
    returnIcon:{
      width:"50%",
      height:"50%",
    },
    movieContainer:{
      ...Spacing.largeMargin,
      flex:50,
      marginTop: POSTER_WIDTH/2 +50,
      alignItems:"center",
    },
    movieTopContainer:{
      height: POSTER_HEIGHT/2,
      width:"100%",
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    leftPopularityContainer:{
      flex:25,
      height:"100%",
      alignItems: "center",
      justifyContent: 'center'
    },
    separatorText:{
      fontColor: "#CCCCCC",
      fontWeight: "600"
    },
    yearReleaseDateText:{
      fontSize: 15,
      fontWeight: "700"
    },
    dayMonthReleaseDateText:{},
    hiddenByPosterContainer:{
      width:POSTER_HEIGHT,
    },
    centerPosterContainer:{
      flex:50,
      height:"100%",
    },
    rightPopularityContainer:{
      flex:25,
      height:"100%",
      alignItems: "center",
      justifyContent: "center"
    },
    starIcon:{
      width:30,
      height:30,
      marginVertical: 10
    },
    youtubeIcon:{
      width:30,
      height:30
    },
    detailsContainer:{
      backgroundColor: Colors.LIGHT,
      alignItems: "center",      
      borderRadius: 34,
      width:"100%",
      height: Spacing.screenHeight-250
    },
    posterContainer:{
      position:"absolute",
      top:-POSTER_HEIGHT/2,
      borderRadius: 25,
      borderWidth:10,
      borderColor:Colors.LIGHT,
      backgroundColor:Colors.LIGHT,
      width: "100%",
      height: POSTER_HEIGHT,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    posterImage:{
      width:"100%",
      height:"100%",
      borderRadius: 25,
    },
    descriptionContainer:{
      paddingHorizontal:20
    },
    movieTitle:{
      marginTop: 10,
      fontWeight: '700',
      fontSize:18,
      textAlign:'center'
    },
    productionContainer:{
      marginTop: 10,
      height: 25
    },
    overviewContainer:{
      marginTop: 20,
      flex:1,
    },
    overviewText:{
      textAlign:'justify'
    }
});

export default MovieDetailsStyle;