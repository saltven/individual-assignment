import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard, 
    StatusBar, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    TextInput,
    Image,
     } from 'react-native'
// import console = require('console');
import * as firebase from 'react-native-firebase';




 

export default class SignUpForm extends Component {

    state = { email: '', password: '', errorMessage: null }

    handleSignUp = () => {
        firebase 
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Login'))
          .catch(error => this.setState({ errorMessage: error.message }))
    }

    _onPressBtn(){
        Alert.alert('Logged in!')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position'>
            <View style={styles.container}>       
                         
                <View style={styles.iconContainer}>
                    <Image 
                        style={styles.icon}
                        source={require('../../images/usericon.png')}/>
                    <Image 
                        style={styles.icon}
                        source={require('../../images/email.png')}/>
                    {/* <Image 
                        style={styles.icon}
                        source={require('../../images/key.png')}/>
                    <Image 
                        style={styles.icon}
                        source={require('../../images/key.png')}/> */}
                </View>

                
                {/* <TextInput 
                    placeholder='Username'
                    placeholderTextColor='#57606f'
                    returnKeyType='next'
                    onSubmitEditing={() => this.emailInput.focus()}
                    autoCapitalize='none'
                    style={styles.input} 
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                    /> */}


             
                <TextInput 
                    placeholder='Email'
                    placeholderTextColor='#57606f'
                    returnKeyType='next'
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize='none'
                    style={styles.input} 
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    /> 

            
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='#57606f'
                    secureTextEntry
                    returnKeyType='next'
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={() => this.passwordInput1.focus()}
                    autoCapitalize='none'
                    style={styles.input} 
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    />

                
                {/* <TextInput 
                    placeholder='Phone Number'
                    placeholderTextColor='#57606f'
                    returnKeyType='done'
                    ref={(input) => this.passwordInput1 = input}
                    autoCapitalize='none'
                    style={styles.input}
                    onChangeText={phone => this.setState({ phone })}
                    value={this.state.phone} 
                    /> */}

                    
                <View style={styles.Container2}>
                    <TouchableOpacity 
                        style={styles.button} 
                        underlayColor="white"
                        onPress={this.handleSignUp} >     
                            <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            {this.state.errorMessage && 
                <Text style={{color: 'red', alignSelf: 'center', marginBottom: 10 }}>
                    {this.state.errorMessage}
                </Text> } 
            </KeyboardAvoidingView>
         
         
        );
    }
}

    



const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: -10  
    },
    input: {
        height: 40,
        backgroundColor: '#FFFF',
        marginBottom: 20,
        opacity: 0.8,
        borderRadius: 10,
        paddingHorizontal: 10, 
        marginRight: -40,
        marginLeft: 20  
    },
    Container2: {
        padding: 0,
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        backgroundColor: '#b33939',
        height: 40,
        width: 100,
        borderRadius: 23,  
    },
    buttonText: {
        padding: 10,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '400',
    },
    icon: {
        height: 25,
        width: 26,
        marginBottom: 35
    },
    iconContainer: {
        //backgroundColor: 'black',
        position: 'absolute',
        width: 30,
        marginLeft: 0,
        marginTop: 37,
    
    },

   
    
});


