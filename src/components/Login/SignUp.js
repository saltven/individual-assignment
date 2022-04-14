import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard, 
    StatusBar, 
    TouchableOpacity,  
    TextInput,
    Image,
    Alert,
    Platform
     } from 'react-native'


import SignUpForm from './SignUpForm';
import Login from './Login';


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class SignUp extends Component {
    
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            
            <DismissKeyboard>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BackFromSignUp')}>
                    <Image 
                        style={styles.backButton}
                        source={require('../../images/back.png')}/>
                </TouchableOpacity>
                <StatusBar barStyle='dark-content' />
                <View style={styles.registerContainer}>
                <View style={styles.formContainer} >
                    <Text style={styles.registration}>Registration</Text>
                    <Text style={styles.guide}>Please enter your details to sign up!</Text>
                    <SignUpForm/>    
                </View>
                </View>        
            </View>
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f2f6',
    },
    registerContainer: {
        
        backgroundColor: '#6BC15B',
        margin: 20,
        marginBottom: 71,
        marginTop: 25,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
            height: 12,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16.00,
        elevation: 24,
    },
    registration: {
        alignSelf: 'center',
        marginTop: 1,
        color: '#FFFF',
        fontSize: 25

    },
    backButton: {
        marginLeft: 30,
        marginTop: Platform.OS === 'ios' ? 55:20,
        height: 30,
        width: 30
    },
    guide: {
        alignSelf: 'center',
        marginTop: 35,
        color: '#FFF',
        
    },
    formContainer: {
        marginTop: 10,
        padding: 30
    }
    
})
