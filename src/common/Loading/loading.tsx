import { ActivityIndicator, Text, View } from "react-native";
import * as Colors from "../../theme/colors";
import LoadingStyle from "./loading_style";

// Component Loading during call of API
const Loading = () => {
    return (
        <View style={LoadingStyle.container}>
            <ActivityIndicator size="large" color={Colors.DARK} />
            <Text style={LoadingStyle.loadingText}>
                Waiting please..
                {'\n'}
                Go prepare your best popcorn !
            </Text>
        </View>
    );
};

export default Loading;