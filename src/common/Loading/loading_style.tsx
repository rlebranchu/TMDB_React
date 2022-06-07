import { StyleSheet } from "react-native";
import * as Colors from "../../theme/colors";

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
        fontWeight: "500"
    }
});

export default LoadingStyle;