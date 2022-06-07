import { Dimensions, StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const MOVIE_RATIO = Spacing.screenWidth*0.45;

const SimilarMovieItemStyle = StyleSheet.create({
    itemContainer: {
        width: Spacing.screenWidth*0.5,
        height: MOVIE_RATIO,
    },
    movieContainer: {
        marginHorizontal: 15,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.LIGHT,
        borderRadius: 34,
        shadowColor: Colors.DARK,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
    },
    posterImage:{
        width: '100%',
        height: MOVIE_RATIO,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
    movieDescription:{
        height: 30,
    },
    movieTitle:{
        fontSize: 12,
        textAlign:'center',
        fontWeight: '700',
    }
});

export default SimilarMovieItemStyle;