import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Platform, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

export default class UserInfo extends Component {

    static navigationOptions = {
        header: null
    }

    constructor() {
        super()
        this.state = {
           myUsername: 'JohnAppleseed',
           myEmail: 'john@google.com',
           myNumber: '0123456789'
        }
     }

     updateUsername = () => {
        this.setState({myUsername: 'My Changed Text'})
     }

     updateEmail = () => {
        this.setState({myEmail: 'My Changed Text2'})
     }

     updateNumber = () => {
        this.setState({myNumber: 'My Changed Text3'})
     }


    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BackFromUserInfo')}>
                    <Image style={styles.backicon}
                        source={require('../../images/back.png')}/>
                </TouchableOpacity>
                
                <View style={styles.container}>
                    <Image style={styles.profileicon}
                        source={require('../../images/profilepic.png')}/>
                    <View style={styles.barrier}/>
                    <View style={styles.barrier1}/>
                    <View style={styles.barrier2}/>
                    <View style={styles.barrier3}/>


                    {/*  USER MAY UPDATE THE USERNAME, EMAIL & PASSWORD BY TAPPING ON THE TEXT AND LETS THEM CHANGE FROM STATIC TEXT TO INPUT TO STATIC TEXT */}
                    {/*  PLEASE IMPLEMENT THE FUNCTIONS FOR THE UPDATING */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Name</Text>  
                        <Text style={styles.headerText}>Email</Text>
                        <Text style={styles.headerText}>Phone</Text>
                    </View>
                    
                    <Text style={styles.username} onPress = {this.updateUsername}>
                        {this.state.myUsername}
                    </Text>

                    <Text style={styles.email} onPress = {this.updateEmail}>
                        {this.state.myEmail}
                    </Text>

                    <Text style={styles.number} onPress = {this.updateNumber}>
                        {this.state.myNumber}
                    </Text>
                    {/*  USER MAY UPDATE THE USERNAME, EMAIL & PASSWORD BY TAPPING ON THE TEXT AND LETS THEM CHANGE FROM STATIC TEXT TO INPUT TO STATIC TEXT */}
                    
                    
                </View>
                
    
                {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}
                <View style={styles.navbar}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/homeicon.png')}/>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentTab')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/walleticon.png')}/>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/historyicon.png')}/>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/settingsiconlight.png')}/>
                </TouchableOpacity >
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
    backicon: {
        height: 40,
        width: 40,
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        marginLeft: 15
    },
    container: {
        height: 400,
        width: Platform.OS === 'ios' ? 320:345,
        backgroundColor: '#FFFF',
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 60:45,
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
    profileicon: {
        height: 55,
        width: 55,
        alignSelf: 'center',
        marginTop: 28
    },
    navbar: {
        width: Platform.OS === 'ios' ? 390 : 430,
        height: 70,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: Platform.OS === 'ios' ? 192: 75
    },
    homeBar: {
        height: 30,
        width: 30,
        marginRight: 32,
        marginLeft: Platform.OS === 'ios' ? 35 : 43.5,
    },
    headerContainer: {
        //backgroundColor: 'black',
        height: 170,
        width: 100,
        marginTop: 50,
        marginLeft: 27
    },
    headerText: {
        marginBottom: 45,
        fontFamily: 'Avenir',
        fontSize: 17,
        fontWeight: '700'
    },
    infoContainer: {
        height: 170,
        width: 100,
        marginTop: 130,
        marginLeft: 170,
        position: 'absolute',
        //backgroundColor: 'gray'
    },
    barrier: {
        height: 1.5,
        width: Platform.OS === 'ios' ? 320:345,
        backgroundColor: '#ecf0f1',
        position: 'absolute',
        marginTop: 110,
    },
    barrier1: {
        height: 1.5,
        width: Platform.OS === 'ios' ? 320:345,
        backgroundColor: '#ecf0f1',
        position: 'absolute',
        marginTop: 179,
    },
    barrier2: {
        height: 1.5,
        width: Platform.OS === 'ios' ? 320:345,
        backgroundColor: '#ecf0f1',
        position: 'absolute',
        marginTop: 247,
    },
    barrier3: {
        height: 1.5,
        width: Platform.OS === 'ios' ? 320:345,
        backgroundColor: '#ecf0f1',
        position: 'absolute',
        marginTop: 315,
    },
    username: {
        position: 'absolute',
        marginTop: 135,
        marginLeft: 100,
        fontSize: 15
    },
    email: {
        position: 'absolute',
        marginTop: 204,
        fontSize: 15,
        marginLeft: 100
    },
    number: {
        position: 'absolute',
        marginTop: 272,
        marginLeft: 100,
        fontSize: 15
    }
})
