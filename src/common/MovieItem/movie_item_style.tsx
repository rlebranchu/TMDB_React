import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import { GlobalStyle } from "../../theme/styles";

const MOVIE_RATIO = GlobalStyle.screenHeight*0.45;

// Style of Little Movie Item 
const MovieItemStyle = StyleSheet.create({
    itemContainer: {
        width: GlobalStyle.screenWidth*0.75,
        height: MOVIE_RATIO
    },
    movieContainer: {
        marginHorizontal: 15,
        padding: 15,
        alignItems: 'center',
        backgroundColor: Colors.LIGHT,
        borderRadius: GlobalStyle.borderRadius,
        ...GlobalStyle.shadow
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
        fontWeight: '700',
    },
    movieSubtitle:{
        fontSize: 12,
        textAlign:'center',
        fontWeight: '500',
    }
});

export default MovieItemStyle;