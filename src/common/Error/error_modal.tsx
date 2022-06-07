import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import ErrorStyle from "./error_style";

// Compoenent show when call of API is wrong
const ErrorModal: React.FC<{onPressPrevious: () => void}> = (props) => {
  return (
    <View style={ErrorStyle.pageContainer}>
        {/* Error Logo */}
        <Image source={require('./../../../assets/error.png')} style={ErrorStyle.imageError}/> 
        <Text style={ErrorStyle.errorTitle}>ERROR</Text>
        <Text style={ErrorStyle.descriptionError}>
          An error occurred while loading the data.
          Please return to the previous page.
        </Text>
        {/* Previous Button */}
        <TouchableOpacity style={ErrorStyle.previousButton} onPress={props.onPressPrevious}>
            <Text style={ErrorStyle.previousText}>PREVIOUS PAGE</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ErrorModal;