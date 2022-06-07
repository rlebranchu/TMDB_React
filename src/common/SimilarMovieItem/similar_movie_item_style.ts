import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import { GlobalStyle } from "../../theme/styles";

const MOVIE_RATIO = GlobalStyle.screenWidth*0.45;

// Style of Little Movie Item 
const SimilarMovieItemStyle = StyleSheet.create({
    itemContainer: {
        width: GlobalStyle.screenWidth*0.5,
        height: MOVIE_RATIO,
    },
    movieContainer: {
        marginHorizontal: 15,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.LIGHT,
        borderRadius: GlobalStyle.borderRadius,
        ...GlobalStyle.shadow
    },
    posterImage: {
        width: '100%',
        height: MOVIE_RATIO,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
    movieDescription: {
        height: 30,
    },
    movieTitle:{
        fontSize: 12,
        textAlign:'center',
        fontWeight: '700',
    }
});

export default SimilarMovieItemStyle;