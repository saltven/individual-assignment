import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform, Image, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import * as firebase from 'react-native-firebase'

export default class Settings extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.topBar}/>
                <Image 
                        style={styles.settingsicon}
                        source={require('../../images/settingsiconlight.png')}/>
                <StatusBar barStyle='light-content' />
                <Text style={styles.settingsText}>Settings</Text>
                <Image 
                        style={styles.profileicon}
                        source={require('../../images/profilepic.png')}/>
                <Text style={styles.usernameText}>JohnAppleseed</Text>



                <View style={styles.container}>
                    {/*  USER INFO BUTTON */}
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('UserInfo')}>
                        <Image 
                            style={styles.infoicon}
                            source={require('../../images/info.png')}/>
                        <Text style={styles.userinfoText}>User info</Text>
                    </TouchableOpacity>
                    {/*  USER INFO BUTTON */}


                    {/*  LOG OUT BUTTON */}
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => firebase.auth().signOut() }>
                        <Image 
                            style={styles.logouticon}
                            source={require('../../images/logout.png')}/>
                        <Text style={styles.logoutText}>Log out</Text>
                    </TouchableOpacity>
                    {/*  LOG OUT BUTTON */}


                    <Text style={styles.orezText}>Copyright © 2019 Orez, Inc. </Text>
                    <Image 
                            style={styles.letter_O_icon}
                            source={require('../../images/letter-o.png')}/>
                </View>

                {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}
                <View style={styles.navbar}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/homeicon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentTab')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/walleticon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/historyicon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/settingsiconlight.png')}/>
                </TouchableOpacity>
                </View>
                {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f2f6'
    },
    topBar: {
        height: Platform.OS === 'ios' ? 460 : 450,
        width: Platform.OS === 'ios' ? 380 : 420,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: Platform.OS === 'ios' ? 0 : -4
    },
    settingsicon: {
        position: 'absolute',
        height: 230,
        width: 230,
        marginLeft: Platform.OS === 'ios' ? 230 : 280,
        marginTop: Platform.OS === 'ios' ? -95 : -100
    },
    settingsText: {
        position: 'absolute',
        fontSize: 35,
        fontFamily: 'Avenir',
        marginTop: Platform.OS === 'ios' ? 90 : 70,
        marginLeft: 20,
        color: '#FFFF'
    },
    profileicon: {
        position: 'absolute',
        height: 50,
        width: 50,
        marginTop: Platform.OS === 'ios' ? 185:175,
        marginLeft: 25
    },
    usernameText: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 200: 190,
        marginLeft: 100,
        fontSize: 17,
        fontWeight: '600',
        color: '#FFFF',

    },
    container: {
        position: 'absolute',
        height: 300,
        width: Platform.OS === 'ios' ? 330 : 362,
        alignSelf: 'center',
        backgroundColor: '#f5f6fa',
        marginTop: Platform.OS === 'ios' ? 270 : 255,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    button: {
        height: 80,
        width: Platform.OS === 'ios' ? 330:362,
        //backgroundColor: 'gray',
        borderBottomWidth: 1,
        borderBottomColor: '#dfe4ea',
    },
    infoicon: {
        height: 35,
        width: 35,
        marginTop: 22,
        marginLeft: 20
    },
    userinfoText: {
        marginTop: -30,
        marginLeft: 80,
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '700'
    },
    logouticon: {
        height: 35,
        width: 35,
        marginTop: 22,
        marginLeft: 17
    },
    logoutText: {
        marginTop: -30,
        marginLeft: 80,
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '700'
    },
    orezText: {
        alignSelf: 'center',
        marginTop: 25
    },
    letter_O_icon: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        marginTop: 15
    },
    navbar: {
        width: Platform.OS === 'ios' ? 390 : 430,
        height: 70,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: Platform.OS === 'ios' ? 282: 143
    },
    homeBar: {
        height: 30,
        width: 30,
        marginRight: 32,
        marginLeft: Platform.OS === 'ios' ? 35 : 43.5,
    },

})
