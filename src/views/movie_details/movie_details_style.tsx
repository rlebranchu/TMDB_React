import { StyleSheet } from 'react-native';
import * as Colors from '../../theme/colors';
import * as Spacing from '../../theme/spacing';

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
      width: '100%',
      height: '100%',
      backgroundColor: Colors.DARK
    },
    previousContainer:{
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
      shadowColor: Colors.DARK,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    returnIcon:{
      width:'50%',
      height:'50%',
    },
    movieContainer:{
      flex:1,
      ...Spacing.largeMargin,
      alignItems:'center',
    },
    headerContainer:{
      width:'100%',
      flex:4,
      backgroundColor: Colors.LIGHT,
      borderTopLeftRadius: 34,
      borderTopRightRadius: 34,
    },
    headerTopContainer:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    leftPopularityContainer:{
      flex:25,
      height:'100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    separatorText:{
      color: '#888888',
      fontWeight: '600',
    },
    yearReleaseDateText:{
      fontSize: 15,
      fontWeight: '700'
    },
    dayMonthReleaseDateText:{},
    hiddenByPosterContainer:{},
    centerPosterContainer:{
      flex:50,
    },
    rightContainer:{
      flex:25,
      height:'100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    starIcon:{
      width:30,
      height:30,
      marginBottom: 10
    },
    youtubeIcon:{
      width:30,
      height:30
    },
    posterContainer:{
      position:'absolute',
      top:-POSTER_HEIGHT/2,
      borderRadius: 25,
      borderWidth:10,
      borderColor:Colors.LIGHT,
      backgroundColor:Colors.LIGHT,
      width: '100%',
      height: POSTER_HEIGHT,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    posterImage:{
      width:'100%',
      height:'100%',
      borderRadius: 25,
    },
    titleContainer:{
      justifyContent: 'center'},
    movieTitle:{
      fontWeight: '700',
      fontSize: 18,
      textAlign:'center',
      paddingHorizontal: 20,
      width: "100%",
    },
    descriptionContainer:{},
    topDescriptionContainer:{
      paddingHorizontal:20,
    },
    detailsContainer:{
      flex:7,
      backgroundColor: Colors.LIGHT,
      alignItems: 'center',      
      borderBottomLeftRadius: 34,
      borderBottomRightRadius: 34,
      width:'100%',
      overflow: 'hidden'
    },
    productionContainer:{
      marginTop: 5,
      height: 25
    },
    overviewContainer:{
      marginTop: 20,
      flex:1,
    },
    overviewText:{
      textAlign:'justify'
    },
    similarMovieContainer:{
      marginTop: 10,
      height: 270
    },
    similarMovieTitle: {
      textAlign: 'center',
      fontWeight:'600',
      fontSize: 15,
      marginBottom: 10,
    }
});

export default MovieDetailsStyle;