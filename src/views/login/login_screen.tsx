import React, { useState } from "react";
import {Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useGlobalState } from "../../../GlobalState";
import { tryTMDBLogin } from "../../api/services";
import { isLoginError, LoginError, LoginReturnType, LoginScreenProps } from "../../types/interfaces";
import LoginStyle from "./login_style";

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  // Initial State of the screen
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

  /* Function to launch Login with username and password edited */
  const _onPressLoginButton = () => {
      // Close the keyboard 
      Keyboard.dismiss();
      // Start Loading to lock multi-login
      setLoading(true);
      // Try login to TMDB Account
      tryTMDBLogin(username, password)
        .then((response: LoginReturnType) => {
          // Check if Login is Successed
          setError(isLoginError(response) ? response : undefined);
          // Stop Loading
          setLoading(false);
          if(!isLoginError(response)){
            clearForm();
            // Setting global state to save session, account and token of user logged
            setState(response);
            // Show Home page
            navigation.push('Home');
          }
        });
  }

  {/* Function show or not the Login Button according to the Loading State */}
  const showLoadingOrLoginButton = 
    loading ? 
        <TouchableOpacity style={LoginStyle.loginButton} disabled>
            <Text style={LoginStyle.loginText}>Log in...</Text>
        </TouchableOpacity>
    :
        <TouchableOpacity style={LoginStyle.loginButton} onPress={_onPressLoginButton}>
            <Text style={LoginStyle.loginText}>LOGIN</Text>
        </TouchableOpacity>
  ;
  
  {/* Function show or not the Error Message if login failed */}
  const showErrorMessage = error ? 
    <View style={LoginStyle.errorContainer}>
        <Text style={LoginStyle.errorMessage} numberOfLines={2}>{error.error_message}</Text>
    </View>
    : null;

  return (
    <View style={LoginStyle.pageContainer}>
      {/* Use KeyboardAvoidingView to adapt view to appirition of keyboard */}
      <KeyboardAvoidingView
        style={LoginStyle.formContainer}
        behavior="padding"
        >
        {/* App Logo */}
        <Image source={require('./../../../assets/adaptive-icon.png')} style={LoginStyle.imageTitle}/> 
        <Text style={LoginStyle.appTitle}>TMDB React</Text>
        {/* Username Input */}
        <TextInput
              style={LoginStyle.inputText}
              defaultValue={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username of your account" />
        {/* Password Input with secure options to hide caracters */}
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