import { ActivityIndicator, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LoadingStyle from "./loading_style";

const Loading = () => {
    return (
        <View style={LoadingStyle.container}>
            <ActivityIndicator size="small" color={Colors.PRIMARY} />
            <Text style={LoadingStyle.loadingText}>
                Waiting please.. Eat your popcorn !
            </Text>
        </View>
    );
};

export default Loading;