import { Dimensions, StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";
import * as Spacing from "../../theme/spacing";

const LoadingStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(21,21,21)',
    },
    loadingText: {
        color: Colors.DARK_NORMALTEXT,
        alignSelf: 'center'
    }
});

export default LoadingStyle;