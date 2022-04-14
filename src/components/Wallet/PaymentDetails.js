import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'

export default class PaymentDetails extends Component {

    

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.mainContainer}>
            <ScrollView style={styles.mainScroll}>
                <Text style={styles.paymentDetailsText}>Payment Details</Text>


                {/* NAVIGATE TO WALLET BUTTON */}
                <TouchableOpacity 
                    style={styles.walletButton}
                    onPress={() => this.props.navigation.navigate('Wallet')}>
                    <Text style={styles.walletText}>Wallet</Text>

                    {/* TOKEN BALANCE OF USER*/}
                    <Text style={styles.balanceValueText}>320</Text>
                    {/* TOKEN BALANCE OF USER*/}

                    <Image style={styles.coin}
                            source={require('../../images/coin.png')}/>
                </TouchableOpacity>
                {/* NAVIGATE TO WALLET BUTTON */}



                <Text style={styles.PaymentHistoryText}>Payment History</Text>

                {/* PAYMENT HISTORY LIST THAT CONSISTS DATE, TIME, TOKEN TEXTS WITH EXAMPLES */}
                <ScrollView style={styles.historyContainer} showsVerticalScrollIndicator={false}>
                    
                        <View style={styles.innerContainer}>
                            <Text style={styles.dateText}>10/01/19</Text>
                            <Text style={styles.timeText}>11:32 a.m</Text>
                            <Image style={styles.coin2}
                                source={require('../../images/coin.png')}/>
                            <Text style={styles.priceText}>10</Text>
                        </View>
                        <View style={styles.innerContainer}>
                            <Text style={styles.dateText}>10/01/19</Text>
                            <Text style={styles.timeText}>11:32 a.m</Text>
                            <Image style={styles.coin2}
                                source={require('../../images/coin.png')}/>
                            <Text style={styles.priceText}>10</Text>
                        </View>
                        <View style={styles.innerContainer}>
                            <Text style={styles.dateText}>10/01/19</Text>
                            <Text style={styles.timeText}>11:32 a.m</Text>
                            <Image style={styles.coin2}
                                source={require('../../images/coin.png')}/>
                            <Text style={styles.priceText}>10</Text>
                        </View>
                        <View style={styles.innerContainer}>
                            <Text style={styles.dateText}>10/01/19</Text>
                            <Text style={styles.timeText}>11:32 a.m</Text>
                            <Image style={styles.coin2}
                                source={require('../../images/coin.png')}/>
                            <Text style={styles.priceText}>10</Text>
                        </View>
                        

                </ScrollView>
                {/* PAYMENT HISTORY LIST THAT CONSISTS DATE, TIME, TOKEN TEXTS WITH EXAMPLES */}


                <Text style={styles.receiptText}>Receipt(s)</Text>


                {/* RECEIPT LIST THAT CONSISTS RECEIPT #, RESERVATION #, PAYMENT TIME, PAYMENT DATE, START TIME, END TIME, PARKING LOT UNIT, TOTAL TOKEN TEXTS WITH EXAMPLES */}
                <ScrollView style={styles.receiptContainer} showsHorizontalScrollIndicator={false} horizontal={true}>

                    <View style={styles.innerReceiptContainer}>
                        <View style={styles.headersContainer}>
                            <Text style={styles.headerText}>Receipt #</Text>
                            <Text style={styles.headerText}>Reservation #</Text>
                            <Text style={styles.headerText}>Time of Payment</Text>
                            <Text style={styles.headerText}>Date of Payment</Text>
                            <Text style={styles.headerText}>Start Time</Text>
                            <Text style={styles.headerText}>End Time</Text>
                            <Text style={styles.headerText}>Parking Lot</Text>
                            <Text style={styles.headerText}>Total</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>334643</Text>
                            <Text style={styles.infoText}>1012</Text>
                            <Text style={styles.infoText}>11:32 a.m</Text>
                            <Text style={styles.infoText}>10/01/19</Text>
                            <Text style={styles.infoText}>12 p.m</Text>
                            <Text style={styles.infoText}>14 p.m</Text>
                            <Text style={styles.infoText}>G - 21</Text>
                            <Text style={styles.infoText}>10 Tokens</Text>
                        </View>
                    </View>

                    <View style={styles.innerReceiptContainer}>
                        <View style={styles.headersContainer}>
                            <Text style={styles.headerText}>Receipt #</Text>
                            <Text style={styles.headerText}>Reservation #</Text>
                            <Text style={styles.headerText}>Time of Payment</Text>
                            <Text style={styles.headerText}>Date of Payment</Text>
                            <Text style={styles.headerText}>Start Time</Text>
                            <Text style={styles.headerText}>End Time</Text>
                            <Text style={styles.headerText}>Parking Lot</Text>
                            <Text style={styles.headerText}>Total</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>334643</Text>
                            <Text style={styles.infoText}>1012</Text>
                            <Text style={styles.infoText}>11:32 a.m</Text>
                            <Text style={styles.infoText}>10/01/19</Text>
                            <Text style={styles.infoText}>12 p.m</Text>
                            <Text style={styles.infoText}>14 p.m</Text>
                            <Text style={styles.infoText}>G - 21</Text>
                            <Text style={styles.infoText}>10 Tokens</Text>
                        </View>
                    </View>
                </ScrollView>
                {/* RECEIPT LIST THAT CONSISTS RECEIPT #, RESERVATION #, PAYMENT TIME, PAYMENT DATE, START TIME, END TIME, PARKING LOT UNIT, TOTAL TOKEN TEXTS WITH EXAMPLES */}
            </ScrollView>


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
            
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f2f6'
    },
    mainScroll: {
        marginBottom: -240
    },
    paymentDetailsText: {
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 40 : 10 ,
        fontSize: 24,
        fontFamily: 'Avenir',
        fontWeight: '700',

    },
    walletButton: {
        height: 60,
        width: Platform.OS === 'ios' ? 320 :360,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8,

    },
    walletText: {
        color: '#FFFF',
        marginTop: 17,
        fontSize: 20,
        marginLeft: 20,
        fontWeight: '700',
        fontFamily: 'Avenir',
    },
    balanceValueText: {
        color: '#FFFF',
        marginLeft: Platform.OS === 'ios' ? 260:300,
        marginTop: -25,
        fontSize: 18,
        fontWeight: '700',
    },
    coin: {
        height: 30,
        width: 30,
        marginLeft: Platform.OS === 'ios' ? 215 : 252,
        marginTop: Platform.OS === 'ios' ? -25:-27
    },
    PaymentHistoryText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: '200',
        marginLeft: 20
    },
    historyContainer: {
        width: Platform.OS === 'ios' ? 350 : 390,
        maxHeight : 245,
        alignSelf: 'center',
        backgroundColor: '#f1f2f6',
        marginTop: 15,
        borderRadius: 10
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6BC15B',
        height: 50,
        width: Platform.OS === 'ios' ? 330 : 370,
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 7
        
    },
    dateText: {
        color: '#FFFF',
        paddingRight: Platform.OS === 'ios' ? 50: 70,
        marginLeft: 16,
        fontWeight: '700',
    },
    timeText: {
        color: '#FFFF',
        fontWeight: '700',
       
    },
    coin2: {
        height: 20,
        width: 20,
        marginLeft: Platform.OS === 'ios' ? 70 : 80,
        
    },
    priceText: {
        color: '#FFFF',
        marginLeft: Platform.OS === 'ios' ? 18 : 23 ,
        fontWeight: '700',
        
    },
    receiptText: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: '100'
    },
    receiptContainer: {
        marginTop: 2,
        backgroundColor: '#f1f2f6',
        maxHeight: 300,
        width: Platform.OS === 'ios' ? 380 : 420,
        alignSelf: 'center',
        marginBottom: Platform.OS === 'ios' ? 100 :100,
        
    },
    innerReceiptContainer: {
        backgroundColor: '#FFFF',
        height: Platform.OS === 'ios' ? 220:185,
        width: Platform.OS === 'ios' ? 340 : 375,
        marginLeft: Platform.OS === 'ios' ? 8 : 14,
        marginTop: 10,
        borderRadius: 15,
        borderColor: '#6BC15B',
        borderWidth: 2,
        borderStyle: 'dashed',
      
        
    },
    headersContainer: {
        marginTop: Platform.OS === 'ios' ? 16: 8,
        marginLeft: 15
    },
    headerText: {
        fontSize: 15,
        marginBottom: Platform.OS === 'ios' ? 5:0,
        fontWeight: '700'
    },
    infoContainer: {
        position: 'absolute',
        marginLeft: Platform.OS === 'ios' ? 240 : 280,
        marginTop: Platform.OS === 'ios' ? 16 :6
    },
    infoText: {
        marginBottom: Platform.OS === 'ios' ? 6.5 :2
    },
    navbar: {
        width: Platform.OS === 'ios' ? 390 : 430,
        height: 70,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: Platform.OS === 'ios'? 259: 240,
    },
    homeBar: {
        height: 30,
        width: 30,
        marginRight: 32,
        marginLeft: Platform.OS === 'ios' ? 35 : 43.5,
    },
})
