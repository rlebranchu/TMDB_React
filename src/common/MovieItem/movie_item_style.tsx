import { Dimensions, StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const SPACING = 10;
const MOVIE_SIZE = Dimensions.get('window').width;

const MovieItemStyle = StyleSheet.create({
    itemContainer: {
        width: MOVIE_SIZE*0.8
    },
    movieContainer: {
        marginHorizontal: SPACING,
        padding: SPACING * 2,
        alignItems: 'center',
        backgroundColor: Colors.LIGHT,
        borderRadius: 34
    },
    posterImage:{
        width: '100%',
        height: MOVIE_SIZE ,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
    movieTitle:{
        fontSize: 24,
        fontFamily: 'Montserrat_400Regular'
    }
});

export default MovieItemStyle;