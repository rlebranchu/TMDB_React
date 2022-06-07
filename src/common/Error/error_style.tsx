import { StyleSheet } from 'react-native';
import * as Colors from '../../theme/colors';
import { GlobalStyle } from '../../theme/styles';

/* Style of Error Modal Component */
const LoginStyle = StyleSheet.create({
    pageContainer: { 
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: GlobalStyle.spacingHorizontal
    },
    titleContainer: {
        flex:20,
        fontWeight: '900',
        alignItems:'center',
    },
    imageError: {
      width: 100,
      height: 100,
    },
    errorTitle: {
      color: Colors.LIGHT_NORMALTEXT,
      fontSize: 25,
      fontWeight: '700',
      marginVertical: 20
    },
    descriptionError:{
      textAlign: 'center'
    },
    previousButton:{
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
    previousText:{
      textAlign: 'center',
      color: Colors.LIGHT,
      fontWeight: "700"
    },
});

export default LoginStyle;