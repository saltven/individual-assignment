import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native'

export default class CurrentReservation extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.mainContainer}>
            <ScrollView >

                <Text style={styles.bookingstatus}>Current Reservation</Text>
                
                <View>
                    <View>
                        <Image 
                            style={styles.backImage}
                            source={require('../../images/carparkblur2.png')}/>
                    </View>
                    <View style={styles.cover}/>

                    {/*  THIS SECTION CONSISTS OF PARKING LOT HEADER, PARKING LOT UNIT, TIME LEFT TEXTS */}
                    <Text style={styles.headerText}>Parking Lot</Text>
                    <Text style={styles.parkingLotText}>G - 21</Text>
                    <View style={styles.timerLeftContainer}>
                        <Text style={styles.timerLeftHeaderText}>Time Left:</Text>
                    </View>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerText}>1 Hour 59 Minutes</Text>
                    </View>
                    {/*  THIS SECTION CONSISTS OF PARKING LOT HEADER, PARKING LOT UNIT, TIME LEFT TEXTS */}

                    
                    <View style={styles.priceContainer}>
                        <Text style={styles.notice}>Notice:</Text>
                        <Text style={styles.noticeText}>Please exit from your parking before the end time or add more hour to your current reservation!</Text>
                    </View>
                </View>


                {/*  EXIT PARKING LOT BUTTON */}
                <TouchableOpacity style={styles.exitParkingLotButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.exitParkingLotText}>Exit Parking Lot</Text>
                </TouchableOpacity>
                {/*  EXIT PARKING LOT BUTTON */}


                <Text style={styles.extendHeader}>Extend Parking Hour</Text>


                {/*  ADDING HOUR COUNTER */}
                <View style={styles.extendTimeContainer}> 
                    <Text style={styles.extendHour}>0 hour(s)</Text>
                </View>
                {/*  ADDING HOUR COUNTER */}


                {/*  ADD HOUR BUTTON */}
                <TouchableOpacity>
                    <Image 
                        style={styles.addButton}
                        source={require('../../images/add.png')}/>
                </TouchableOpacity>
                {/*  ADD HOUR BUTTON */}


                {/*  MINUS HOUR BUTTON */}
                <TouchableOpacity>
                    <Image 
                    style={styles.minusButton}
                    source={require('../../images/minus.png')}/>
                </TouchableOpacity>
                {/*  MINUS HOUR BUTTON */}


                {/*  GET TOTAL HOURS AND PAY BUTTON */}
                <TouchableOpacity style={styles.addHourPayButton}>
                    <Text style={styles.addHourPayText}>Add Hour and Pay</Text>
                </TouchableOpacity>
                {/*  GET TOTAL HOURS AND PAY BUTTON */}


                <Text style={styles.recentReservationHeader}>Recent Reservation(s)</Text>


                {/*  RECENT RESERVATIONS LIST WITH EXAMPLES */}
                <View style={styles.listContainer} >
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>    
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.plainContainer}/>
                {/*  RECENT RESERVATIONS LIST WITH EXAMPLES */}


            </ScrollView>

            {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}
            <View style={styles.navbar}>
                <TouchableWithoutFeedback>
                    <Image style={styles.homeBar}
                            source={require('../../images/homeiconlight.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Image style={styles.homeBar}
                            source={require('../../images/walleticon.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Image style={styles.homeBar}
                            source={require('../../images/historyicon.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Image style={styles.homeBar}
                            source={require('../../images/settingsicon.png')}/>
                </TouchableWithoutFeedback>
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
    backImage: {
        height: 300,
        width: Platform.OS === 'ios' ? 420 : 450,
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 15,
        opacity: 1,
        //backgroundColor:'#6BC15B'
        
    },
    
    bookingstatus: {
        marginLeft: 15,
        marginTop: Platform.OS === 'ios' ? 40 : 10,
        fontSize: 26,
        fontWeight: '900',
        fontFamily: 'Avenir'
    },
    headerText: {
        position: 'absolute',
        marginTop: 25,
        marginLeft: 20,
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Avenir',
        fontWeight: '100',
        color: Platform.OS === 'ios' ? 'black' : 'black'
        
    },
    parkingLotText: {
        position: 'absolute',
        marginTop: 55,
        alignSelf: 'center',
        color: Platform.OS === 'ios' ? "#FFFF" :'#FFFF',
        fontFamily: 'Avenir',
        fontSize: 65,
        fontWeight: '700'
    },
    timerLeftContainer: {
        position: 'absolute',
        marginTop: 167, 
        marginLeft: 60,
    },
    timerLeftHeaderText: {
        
        color: Platform.OS === 'ios' ? "black" : 'black',
        fontFamily: 'Avenir',
        fontSize: 15
    
    },
    timerContainer: {
        position: 'absolute',
        marginTop: 163, 
        marginLeft: 140,
    
    },
    timerText: {
        color: Platform.OS === 'ios' ? '#FFFF' : '#FFFF',
        marginBottom: 35,
        fontSize: 23
    },
    priceContainer: {
        position: 'absolute',
        marginTop: 0,
    },
    notice: {
        position: 'absolute',
        color: '#e84118',
        marginTop: 225,
        marginLeft: Platform.OS === 'ios' ? 165 :174,
        fontWeight: '900',
        fontSize: 14
    },
    noticeText: {
        color: Platform.OS === 'ios' ? '#FFFF':'#FFFF' ,
        position: 'absolute',
        width: 200,
        marginTop: 242,
        marginLeft: Platform.OS === 'ios' ? 89 : 95,
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Avenir'
    },
    cover: {
        height: 300,
        width: Platform.OS === 'ios' ? 350 : 380,
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 15,
        //backgroundColor: Platform.OS === 'ios' ? '#2d3436':'#2d3436',
        position: 'absolute',
        opacity: Platform.OS === 'ios' ? 0.5 : 0.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.9,
        shadowRadius: 16.00,
        elevation: 24,
    },
    exitParkingLotButton: {
        backgroundColor: '#6BC15B',
        margin: 12,
        width: 200,
        marginTop: 30,
        borderRadius: 15,
        height: 45,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    exitParkingLotText: {
        color: '#FFFF',
        fontSize: 18,
        fontFamily: 'Avenir',
        marginTop: 10,
        marginLeft: 34

    },
    extendHeader: {
        marginLeft: 15,
        fontSize: 24,
        fontFamily: 'Avenir',
        marginTop: 8,
        fontWeight: '900'

    },
    extendTimeContainer: {
        height: 50,
        width: 120,
        //backgroundColor: 'gray',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15,
        borderColor: '#f1f2f6',
        borderWidth: 2,
    },
    extendHour: {
        alignSelf: 'center',
        marginTop: 9,
        fontSize: 20
    },
    
    addContainer: {
        height: 40,
        width: 40,
        //backgroundColor: 'gray',
        marginLeft: 60,
        marginTop: 575,
        position: 'absolute',
        borderRadius: 5,
        borderColor: '#45aaf2',
        borderWidth: 2

    },
    addButton: {
        height: 30,
        width: 30,
        position: 'absolute',
        marginTop: -38,
        marginLeft: 65
    },
    minusButton: {
        height: 30,
        width: 30,
        position: 'absolute',
        marginTop: -39,
        marginLeft: Platform.OS === 'ios' ? 280 : 310
    }, 
    listContainer: {
        backgroundColor: '#f5f6fa',
        height: 50,
        width: 350,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 10.30,
        elevation: 1,
    },
    addHourPayButton: {
        backgroundColor: '#6BC15B',
        margin: 12,
        width: 200,
        marginTop: 23,
        borderRadius: 15,
        height: 45,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        marginBottom: 20
    },
    addHourPayText: {
        color: '#FFFF',
        fontSize: 18,
        fontFamily: 'Avenir',
        marginTop: 10,
        marginLeft: 27
    },
    recentReservationHeader: {
        marginLeft: 15,
        marginTop: 4,
        fontSize: 25,
        fontWeight: '900',
        fontFamily: 'Avenir',
        marginBottom: 6
    },
    listContainer: {
        backgroundColor: Platform.OS === 'ios' ?  '#f5f6fa' : '#dcdde1',
        height: 50,
        width: 350,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 10.30,
        elevation: 1,
    },
    innerListContainer: {
        flexDirection: 'row',
        
    },
    recentInfo: {
         marginRight: 38,
         marginLeft: 15,
         marginTop: 15,
         fontFamily: 'Avenir',
         fontSize: 14
        
    },
    coin: {
        height: 22,
        width: 22,
        position: 'absolute',
        marginLeft: 285,
        marginTop: 12
    },
    carparkLotInfo: {
        marginRight: 38,
         marginLeft: 15,
         marginTop: 15,
         fontFamily: 'Avenir',
         fontSize: 14,
         fontWeight: '900'
        
    },
    plainContainer: {
        backgroundColor: '#f5f6fa',
        height:3,
        width: 400,
        alignSelf: 'center',
        marginTop: 15
    },
    navbar: {
        width: Platform.OS === 'ios' ? 390 : 430,
        height: 70,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14
    },
    homeBar: {
        height: 30,
        width: 30,
        marginRight: 32,
        marginLeft: Platform.OS === 'ios' ? 35 : 43.5,
    }

})
