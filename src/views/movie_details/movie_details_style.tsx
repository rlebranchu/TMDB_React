import { StyleSheet } from 'react-native';
import * as Colors from '../../theme/colors';
import { GlobalStyle } from '../../theme/styles';

const POSTER_HEIGHT = GlobalStyle.screenHeight*0.3;

/* Style of Movie Details Page */
const MovieDetailsStyle = StyleSheet.create({
    pageContainer: {
      width: GlobalStyle.screenWidth,
      height: GlobalStyle.screenHeight,
      backgroundColor: Colors.DARK,
      flexDirection: 'column',
      flex:1
    },
    backdrop:{
      width: '100%',
      height: '100%',
      backgroundColor: Colors.DARK
    },
    previousContainer:{
      margin: GlobalStyle.spacingHorizontal
    },
    returnButton:{
      alignItems:'center',
      justifyContent:'center',
      width: 40,
      height: 40,
      marginTop: 50,
      backgroundColor: Colors.LIGHT,
      borderRadius:15,
      ...GlobalStyle.shadow
    },
    returnIcon:{
      width:'50%',
      height:'50%',
    },
    movieContainer:{
      flex:1,
      alignItems:'center',
      margin: GlobalStyle.spacingHorizontal
    },
    headerContainer:{
      width:'100%',
      flex:3,
      borderTopLeftRadius: GlobalStyle.borderRadius,
      borderTopRightRadius: GlobalStyle.borderRadius,
      alignSelf: 'flex-start',
      backgroundColor: Colors.LIGHT
    },
    headerTopContainer:{
      flexDirection: 'row'
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
      ...GlobalStyle.shadow
    },
    posterImage:{
      width:'100%',
      height:'100%',
      borderRadius: 25,
    },
    titleContainer:{
      justifyContent: 'center'
    },
    movieTitle:{
      fontWeight: '700',
      fontSize: 18,
      textAlign:'center',
      paddingHorizontal: GlobalStyle.spacingHorizontal,
      width: "100%",
    },
    descriptionContainer:{
    },
    topDescriptionContainer:{
      paddingHorizontal: GlobalStyle.spacingHorizontal,
    },
    detailsContainer:{
      flex:7,
      backgroundColor: Colors.LIGHT,
      alignItems: 'center',      
      borderBottomLeftRadius: GlobalStyle.borderRadius,
      borderBottomRightRadius: GlobalStyle.borderRadius,
      width:'100%',
      overflow: 'hidden'
    },
    productionContainer:{
      marginTop: 5,
      height: 25
    },
    overviewContainer:{
      marginTop: GlobalStyle.spacingHorizontal,
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