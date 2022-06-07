import { StyleSheet } from 'react-native';
import * as Colors from '../../theme/colors';
import { GlobalStyle } from '../../theme/styles';

/* Style of Login Page */
const LoginStyle = StyleSheet.create({
    pageContainer: { 
        flex: 1,
        justifyContent: "center"
    },
    titleContainer: {
        flex:20,
        fontWeight: '900',
        alignItems:'center',
    },
    imageTitle: {
      width: 100,
      height: 100 
    },
    appTitle: {
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 25,
      fontWeight: '700',
    },
    formContainer: {
        marginBottom: 15,
        marginHorizontal: GlobalStyle.spacingHorizontal,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT,
        borderRadius:15,
        ...GlobalStyle.shadow,
        padding: GlobalStyle.spacingHorizontal
    },
    inputText: {
      ...GlobalStyle.shadow,
      backgroundColor: Colors.LIGHT,
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 14,
      borderRadius: 25,
      borderColor: Colors.DARK,
      width: '100%',
      height: 40,
      borderWidth: 1,
      marginTop: 30,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontWeight: '400'
    },
    loginButton:{
      ...GlobalStyle.shadow,
      backgroundColor: Colors.DARK,
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 14,
      borderRadius: 25,
      width: '100%',
      height: 40,
      borderWidth: 1,
      marginVertical: 30,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontWeight: '400',
      justifyContent: "center"
    },
    loginText:{
      textAlign: 'center',
      color: Colors.LIGHT,
      fontWeight: "700"
    },
    errorContainer: {
      marginBottom: 10,
      paddingVertical: 5,
      borderRadius: 15,
    },
    errorMessage:{
      fontWeight: '600',
      color: '#FF5050',
      textAlign: 'center'
    }
});

export default LoginStyle;