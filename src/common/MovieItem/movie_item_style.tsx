import { Dimensions, StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const MOVIE_RATIO = Spacing.windowHeight*0.45;

const MovieItemStyle = StyleSheet.create({
    itemContainer: {
        width: Spacing.windowWidth*0.75,
        height: MOVIE_RATIO
    },
    movieContainer: {
        marginHorizontal: 15,
        padding: 15,
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
        height: 45,
    },
    movieTitle:{
        fontSize: 12,
        textAlign:'center',
        fontFamily: 'Montserrat_700Bold',
    },
    movieSubtitle:{
        fontSize: 12,
        textAlign:'center',
        fontFamily: 'Montserrat_500Medium',
    }
});

export default MovieItemStyle;