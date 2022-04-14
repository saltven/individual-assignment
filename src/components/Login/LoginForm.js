import React, { Component } from 'react';
import { Alert, StyleSheet, View, TextInput, Button, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
// import console = require('console');
import * as firebase from 'react-native-firebase';
import AdminHome from '../Admin/AdminHome';


export default class LoginForm extends Component {

    state = {
        email: '', password: '', errorMessage: null
    }

    _onPressBtn(){
        Alert.alert('Logged in!')
    }

    handleLogin = () => {
        const { email, password } = this.state
         
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Home'))
          .catch(error => this.setState({ errorMessage: error.message}))
        
        
        
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='height'>
                {this.state.errorMessage && 
                <Text style={{color: 'red', alignSelf: 'center', marginTop: -75, position: 'absolute'}}>
                    {this.state.errorMessage}
                </Text> } 
            <View style={styles.container}>
                {/* USERNAME INPUT  */ }
                <TextInput            
                    placeholder='Email'                                          
                    placeholderTextColor='#57606f'
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize='none'
                    style={styles.input} 
                    onChangeText = {email => this.setState({email})}
                    value={this.state.email}
                /> 
                
                {/* PASSWORD INPUT  */ }
                <TextInput                                              
                    placeholder='Password' 
                    placeholderTextColor='#57606f'
                    secureTextEntry
                    returnKeyType='done'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input} 
                    onChangeText = {password => this.setState({password})}
                    value={this.state.password}
                /> 

                <View style={styles.Container2}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.handleLogin} underlayColor="white">     
                            <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            </KeyboardAvoidingView>
         
         
        );
    }
}

    



const styles = StyleSheet.create({
    container: {
        padding: 30,
        
    },
    input: {
        height: 40,
        backgroundColor: '#FFFF',
        marginBottom: 20,
        opacity: 0.8,
        borderRadius: 10,
        paddingHorizontal: 10,
        
        
    },
    Container2: {
        padding: 0,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#b33939',
        height: 40,
        width: 340,
        borderRadius: 23,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 9.00,
        elevation: 24,
    },
    buttonText: {
        padding: 10,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '400',

    }

   
    
});
