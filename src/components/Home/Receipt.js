import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native'

export default class Receipt extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            
            
            <View style={styles.main}>
            <StatusBar barStyle='dark-content' />
            <Text style={styles.paymentHeader}>Payment successful!</Text>


            {/* THIS CONTAINER CONSISTS OF RECEIPT #, RESERVATION #, PAYMENT TIME, PAYMENT DATE, START TIME, END TIME, PARKING LOT UNIT AND TOTAL TOKENS */}
            <View style={styles.mainContainer}>
                <View style={styles.headersContainer}>
                    <Text style={styles.headerText}>Receipt #</Text>
                    <Text style={styles.headerText}>Reservation #</Text>
                    <Text style={styles.headerText}>Time of Payment</Text>
                    <Text style={styles.headerText}>Date of Payment</Text>
                    <Text style={styles.headerText}>Start Time</Text>
                    <Text style={styles.headerText}>End Time</Text>
                    <Text style={styles.headerText}>Parking Lot</Text>
                    <Text style={styles.totalHeaderText}>Total</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>334643</Text>
                    <Text style={styles.infoText}>1012</Text>
                    <Text style={styles.infoText}>11:32 a.m</Text>
                    <Text style={styles.infoText}>10/01/19</Text>
                    <Text style={styles.infoText}>12 p.m</Text>
                    <Text style={styles.infoText}>14 p.m</Text>
                    <Text style={styles.infoText}>G - 21</Text>
                </View>
                <Text style={styles.totalText}>10 Tokens</Text>
            </View>
            {/* THIS CONTAINER CONSISTS OF RECEIPT #, RESERVATION #, PAYMENT TIME, PAYMENT DATE, START TIME, END TIME, PARKING LOT UNIT AND TOTAL TOKENS */}


            {/* REDIRECT TO HOMEPAGE BUTTON */}
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Upcoming')} underlayColor="white">
                    <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            {/* REDIRECT TO HOMEPAGE BUTTON */}


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
        marginTop: 55,
        height: 30,
        width: 30
    },
    mainContainer: {
        backgroundColor: '#FFFF',
        margin: 20,
        marginBottom: 71,
        marginTop: 20,
        borderRadius: 10,
        height: 370,
        borderColor: '#6BC15B',
        borderWidth: 1,
        borderStyle: 'dashed',
        // shadowColor: "#000",
        // shadowOffset: {
	    //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.4,
        // shadowRadius: 16.00,
        // elevation: 24,
    },
    paymentHeader: {
        marginLeft: 20,
        marginTop: 60,
        fontSize: 26,
        fontWeight: '900',
        fontFamily: 'Avenir'
    },
    headersContainer: {
        marginLeft: 32,
        marginTop: 30
    },
    headerText: {
        marginBottom: 12,
        fontSize: 17,
        fontFamily: 'Avenir',
        color: '#636e72'
    },
    infoContainer: {
        marginLeft: Platform.OS === 'ios' ? 220: 255,
        marginTop: 30,
        position: 'absolute',

    },
    infoText: {
        color: '#636e72',
        marginBottom: 12,
        fontSize: 17,
        fontFamily: 'Avenir',
        fontWeight: '900'

    },
    totalText: {
        fontSize: 22,
        position: 'absolute',
        marginLeft: Platform.OS === 'ios' ? 200:235,
        marginTop: 297,
        color: '#636e72',
        fontFamily: 'Avenir',
        fontWeight: '700',
        
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
        
    },
    totalHeaderText: {
        fontSize: 30,
        position: 'absolute',
        marginLeft: 0,
        marginTop: 260,
        color: '#636e72',
        fontFamily: 'Avenir',
        fontWeight: '700',
    }
})
