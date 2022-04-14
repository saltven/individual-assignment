import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Platform } from 'react-native'

export default class Payment extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.main}>

                {/* BACK BUTTON */}
                <TouchableOpacity>
                    <Image 
                        style={styles.backButton}
                        source={require('../../images/back.png')}/>
                </TouchableOpacity>
                {/* BACK BUTTON */}


                {/* WALLET BALANCE BUTTON */}
                <TouchableOpacity>
                    <View style={styles.balanceContainer}>
                        <Image 
                            style={styles.coin}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.balanceText}>320</Text>
                    </View>
                </TouchableOpacity>
                {/* WALLET BALANCE BUTTON */}


                <Text style={styles.paymentHeader}>Payment for</Text>


                {/* THIS CONTAINER CONSISTS OF PARKING LOT UNIT, START TIME, END TIME, DATE AND TOTAL RESERVATION FEE (TOKEN) */}
                <View style={styles.mainContainer}>
                    <View style={styles.headersContainer}>
                        <Text style={styles.headerText}>Parking Lot</Text>
                        <Text style={styles.headerText}>Start Time</Text>
                        <Text style={styles.headerText}>End Time</Text>
                        <Text style={styles.headerText}>Date</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>G - 21</Text>
                        <Text style={styles.infoText}>12 p.m</Text>
                        <Text style={styles.infoText}>14 p.m</Text>
                        <Text style={styles.infoText}>10/01/19</Text>
                    </View>
                    <Image 
                        style={styles.coin2}
                        source={require('../../images/coin.png')}/>
                        <Text style={styles.totalText}>10</Text>
                </View>
                {/* THIS CONTAINER CONSISTS OF PARKING LOT UNIT, START TIME, END TIME, DATE AND TOTAL RESERVATION FEE (TOKEN) */}

                {/* PAY BUTTON */}
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Receipt')} underlayColor="white">
                        <Text style={styles.buttonText}>Pay Now</Text>
                </TouchableOpacity>
                {/* PAY BUTTON */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f1f2f6'
    },
    backButton: {
        marginLeft: 20,
        marginTop: Platform.OS === 'ios' ? 55:30,
        height: 30,
        width: 30
    },
    mainContainer: {
        backgroundColor: '#6BC15B',
        margin: 20,
        marginBottom: 71,
        marginTop: 20,
        borderRadius: 10,
        height: 390,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
            height: 12,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16.00,
        elevation: 24,
    },
    paymentHeader: {
        marginLeft: 20,
        marginTop: 18,
        fontSize: 26,
        fontWeight: '900',
        fontFamily: 'Avenir'
    },
    balanceContainer: {
        height: 40,
        width: 80,
        position: 'absolute',
        //backgroundColor: 'gray',
        marginLeft: Platform.OS === 'ios' ? 270: 295,
        marginTop: -35,
        borderRadius: 20,
        borderColor: '#6BC15B',
        borderWidth: 1
        
    },
    coin: {
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 7.5

    },
    balanceText: {
        color: 'gray',
        position: 'absolute',
        marginTop: 10,
        marginLeft: 42
    },
    headersContainer: {
        marginLeft: 60,
        marginTop: 50
    },
    headerText: {
        marginBottom: 40,
        fontSize: 17,
        fontFamily: 'Avenir',
        color: '#FFFF'
    },
    infoContainer: {
        marginLeft: 190,
        marginTop: 45,
        position: 'absolute',

    },
    infoText: {
        color: '#f1f2f6',
        marginBottom: 32.8,
        fontSize: 26

    },
    coin2: {
        height: 40,
        width: 40,
        marginLeft: 105
    },
    totalText: {
        fontSize: 30,
        position: 'absolute',
        marginLeft: 170,
        marginTop: 305,
        color: '#FFFF',
        fontFamily: 'Avenir',
        fontWeight: '700'
    },
    button: {
        backgroundColor: '#6BC15B',
        height: 40,
        width: 100,
        borderRadius: 23, 
        alignSelf: 'center',
        marginTop: -40,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
            height: 12,
        },
        shadowOpacity: 0.4,
        shadowRadius: 11.00,
        elevation: 20,
    },
    buttonText: {
        padding: 10,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '400',
        
    }
})
