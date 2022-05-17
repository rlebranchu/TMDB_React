import { Dimensions, StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const LoadingStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT,
    },
    loadingText: {
        marginTop: 25,
        color: Colors.LIGHT_NORMALTEXT,
        textAlign: 'center',
        lineHeight: 25,
        fontFamily: "Montserrat_500Medium"
    }
});

export default LoadingStyle;