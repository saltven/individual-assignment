import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform, Image, TextInput, Keyboard, TouchableWithoutFeedback, StatusBar, TouchableOpacity } from 'react-native'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Wallet extends Component {

    constructor(props){
        super(props);
        this.state = {
            balance: 0,
            
        }
    }

    static navigationOptions = {
        header: null
    }

    

    render() {
        return (
            <DismissKeyboard>
            <View style={styles.mainContainer}>
                <StatusBar barStyle='light-content' />
                <View style={styles.topBar}/>


                {/* BACK BUTTON */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BackFromWallet')}>
                    <Image 
                        style={styles.backButton}
                        source={require('../../images/backlight.png')}/>
                </TouchableOpacity>
                {/* BACK BUTTON */}

                
                <Text style={styles.walletText}>Wallet</Text>
                <View style={styles.balanceCoinContainer}>  
                    <Text style={styles.balanceText}>Balance</Text>
                    <Image 
                        style={styles.coin}
                        source={require('../../images/coin.png')}/>
                </View>


                {/* TOKEN BALANCE OF USER */}
                <Text style={styles.balanceValue}>320</Text>
                {/* TOKEN BALANCE OF USER */}


                <Text style={styles.purchaseTokenText}>Purchase Token</Text>


                {/* TOKEN INPUT */}
                <TextInput 
                    placeholder=''
                    placeholderTextColor='#57606f'
                    keyboardType='numeric'
                    returnKeyType='done'
                    autoCapitalize='none'
                    style={styles.input} 
                />
                {/* TOKEN INPUT */}


                {/* PURCHASE TOKEN BUTTON */}
                <TouchableOpacity 
                    style={styles.buyButton}
                    onPress={this.buyToken} >
                        <Text style={styles.buyText}>Buy</Text>
                </TouchableOpacity>
                {/* PURCHASE TOKEN BUTTON */}


                {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}
                <View style={styles.navbar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image style={styles.homeBar}
                                source={require('../../images/homeicon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentTab')}>
                        <Image style={styles.homeBar}
                                source={require('../../images/walleticonlight.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                        <Image style={styles.homeBar}
                                source={require('../../images/historyicon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                        <Image style={styles.homeBar}
                                source={require('../../images/settingsicon.png')}/>
                    </TouchableOpacity>
                 </View>  
                 {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}
                
            </View>
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f2f6'
    },
    topBar: {
        height: Platform.OS === 'ios' ? 99 : 70,
        width: Platform.OS === 'ios' ? 380 : 420,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: Platform.OS === 'ios' ? 0 : -4
    },
    walletText: {
        position: 'absolute',
        color: '#FFFF',
        fontSize: 24,
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 48.5 : 15,
        fontFamily: 'Avenir'
    },
    balanceText: {
        color: '#2d3436',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Avenir'
    },
    balanceCoinContainer: {
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 30 : 28,
        flexDirection: 'row'
    },
    coin: {
        height: 40,
        width: 40,
        marginLeft: 8
    },
    balanceValue: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 75,
        fontFamily: 'Avenir',
        color: '#2d3436'
    },
    purchaseTokenText: {
        fontSize: 22,
        marginTop: 28,
        marginLeft: 20,
        fontFamily: 'Avenir',
        fontWeight: '700',
        color: '#2d3436'
    },
    input: {
        height: 40,
        width: 100,
        backgroundColor: '#FFFF',
        marginBottom: 20,
        marginTop: 27,
        opacity: 0.8,
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: '#6BC15B',
        borderWidth: 2,
        alignSelf: 'center'
        
    },
    buyButton: {
        height: 35,
        width: 65,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        borderRadius: 9,
        marginTop: 25
    },
    buyText: {
        alignSelf: 'center',
        marginTop: 8,
        color: '#FFFF'
    },
    navbar: {
        width: Platform.OS === 'ios' ? 390 : 430,
        height: 70,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: Platform.OS === 'ios' ? 245 : 130
    },
    homeBar: {
        height: 30,
        width: 30,
        marginRight: 32,
        marginLeft: Platform.OS === 'ios' ? 35 : 43.5,
    },
    backButton: {
        marginLeft: 10,
        marginTop: -50,
        height: 30,
        width: 30,
        position: 'absolute'
    },
})
