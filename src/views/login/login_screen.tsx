import React, { useEffect, useState } from "react";
import {Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { GlobalStateProvider, useGlobalState } from "../../../GlobalState";
import { tryTMDBLogin } from "../../api/services";
import Loading from "../../common/Loading/loading";
import { isLoginError, LoginError, LoginReturnType, LoginScreenProps, TMDBToken } from "../../types/interfaces";
import LoginStyle from "./login_style";

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<LoginError | undefined>();
  const {setState} = useGlobalState();

  const clearForm = () => {
      setUsername('');
      setPassword('');
      setError(undefined);
  }

  const _onPressLoginButton = () => {
      Keyboard.dismiss();
      setLoading(true);
      tryTMDBLogin(username, password).then((response: LoginReturnType) => {
        setError(isLoginError(response) ? response : undefined);
        setLoading(false);
        if(!isLoginError(response)){
            clearForm();
            setState(response);
            navigation.navigate('Home');
        }
      });
  }

  const showLoadingOrLoginButton = 
    loading ? 
        <TouchableOpacity style={LoginStyle.loginButton} onPress={_onPressLoginButton}>
            <Text style={LoginStyle.loginText}>Log in...</Text>
        </TouchableOpacity>
    :
        <TouchableOpacity style={LoginStyle.loginButton} onPress={_onPressLoginButton}>
            <Text style={LoginStyle.loginText}>LOGIN</Text>
        </TouchableOpacity>
  ;
  
  const showErrorMessage = error ? 
    <View style={LoginStyle.errorContainer}>
        <Text style={LoginStyle.errorMessage} numberOfLines={2}>{error.error_message}</Text>
    </View>
    : null;

  return (
    <View style={LoginStyle.pageContainer}>
      <KeyboardAvoidingView
        style={LoginStyle.formContainer}
        behavior="padding"
        >
        <Image source={require('./../../../assets/adaptive-icon.png')} style={LoginStyle.imageTitle}/> 
        <Text style={LoginStyle.appTitle}>TMDB React</Text>
        <TextInput
              style={LoginStyle.inputText}
              defaultValue={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username of your account" />
        <TextInput
              style={LoginStyle.inputText}
              defaultValue={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password" />
        {showLoadingOrLoginButton}
        {showErrorMessage}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;