import * as React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Button, Platform  } from 'react-native';
import LoginForm from './LoginForm';
import firebase from 'react-native-firebase'

import SignUp from './SignUp';



const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);



export default class Login extends React.Component {

    

    componentDidMount() {
        
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBfywUgCOuYmAT7ap7X1VwQgA_G9DfsnaA",
            authDomain: "orezreservation.firebaseapp.com",
            databaseURL: "https://orezreservation.firebaseio.com",
            projectId: "orezreservation",
            storageBucket: "",
            messagingSenderId: "405756582677",
            appId: "1:405756582677:web:b345bbd008d98b9d"
        };
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'Login')
        })
        
        
    }


    static navigationOptions = {
        header: null
    }
    

    render() {
        return (
            <DismissKeyboard>
            <View style={styles.mainContainer}>
                <StatusBar barStyle='light-content' />
                <View style={styles.container2}>
                
                    <View style={styles.logoContainer}>   
                        <Image 
                            style={styles.logo}
                            source={require('../../images/orezlogo.png')} />
                        <Text style={styles.title}>Book your own temporary carpark now!</Text>
                        <Text style={styles.title2}>SIGN IN</Text>                  
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm/>                            
                    </View>
                
                </View>
                <View style={styles.lowerContainer}>
                    <Button style={styles.forgotpassword} title='Forgot password?'/>        
                    <View style={styles.divider}/>
                    <View style={styles.signUpContainer}> 
                    <Text style={styles.signUpInfo}>If you have not registered yet, sign up now!</Text>
                    <TouchableOpacity 
                        style={styles.signUpButton} 
                        underlayColor="white"
                        onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.signUpText}>Sign Up</Text>                      
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            </DismissKeyboard>
            
        );
    }
}




const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f2f6',
        maxHeight: 900,
        
    },
    container2: {
        backgroundColor: '#6BC15B',
        //maxHeight: 560,
        height: Platform.OS === 'ios' ? 570:470,
        borderRadius: 20,
        marginTop: Platform.OS === 'ios' ? 0:-13,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
            height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius: 14.00,
        elevation: 24,
    },
    logo: {
        width: 159,
        height: 59,
        
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 140 : 55,
        
    },
    title: {
        color: '#FFFF',
        marginTop: 70,
        textAlign: 'center',
        position: 'absolute',
        opacity: 0.7,
        fontWeight: '300',
        fontSize: 15,
        width: 180
    },
    title2: {
        color: '#FFF',
        marginTop: Platform.OS === 'ios' ? 190 : 160,
        textAlign: 'center',
        position: 'absolute',
        opacity: 0.7,
        fontWeight: '900',
        fontSize: 25,
    },
    formContainer: {
        marginTop: Platform.OS === 'ios' ?  150 : 140,
    },
    formContainer2: {
        backgroundColor: '#ced6e0',
        width: 250,
        height: 90,
        alignSelf: 'center',
        marginTop: 30,
    },
    keyboard: {
        // flex: 1
    },
    lowerContainer: {
        
        marginTop: Platform.OS === 'ios' ? 600:470,
        width: 300,
        height: 220,
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute'
        //backgroundColor: 'gray'
         
    },
    forgotpassword: {
        marginTop: 30,
        color: '#0984e3'
    },
    signUpButton: {
        backgroundColor: '#6BC15B',
        width: 100,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 9.00,
        elevation: 24,
    },
    signUpText: {
        padding:Platform.OS === 'ios' ? 9:7,
        fontFamily: 'Helvetica',
        color: '#FFFF'
    },
    signUpInfo: {
        marginTop: 35,
        color: '#636e72'
    },
    divider: {
        backgroundColor: 'gray',
        width: 300,
        height: 0.2,
        marginTop: 26

    }
    

});