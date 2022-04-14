import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

export default class UpcomingReservation extends Component {

    static navigationOptions ={
        header: null
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView>
                <View>
                <Text style={styles.upcomingHeader}>Upcoming Reservation</Text>
                    
                    <Image 
                        style={styles.backImage}
                        source={require('../../images/carparkblur1.png')}/>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Current')}>
                        <View style={styles.cover}/>
                    </TouchableWithoutFeedback>
                    

                    {/*  THIS CONTAINER CONSISTS OF PARKING LOT HEADER, PARKING LOT UNIT, START TIME, END TIME, DATE AND TOTAL FEE TEXTS*/}
                    <View style={styles.allInfoContainer}>
                        <Text style={styles.headerText}>Parking Lot</Text>
                        <Text style={styles.parkingLotText}>G - 21</Text>
                        <View style={styles.startEndDateContainer}>
                            <Text style={styles.startTimeHeaderText}>Start Time</Text>
                            <Text style={styles.startTimeHeaderText}>End Time</Text>
                            <Text style={styles.startTimeHeaderText}>Date</Text>
                        </View>
                        <View style={styles.timedateContainer}>
                            <Text style={styles.startTimeDateText}>12 p.m</Text>
                            <Text style={styles.startTimeDateText}>14 p.m</Text>
                            <Text style={styles.startTimeDateText}>10/01/19</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Image 
                                style={styles.coin}
                                source={require('../../images/coin.png')}/>
                            <Text style={styles.coinText}>10</Text>
                        </View>
                    </View>
                    {/*  THIS CONTAINER CONSISTS OF PARKING LOT HEADER, PARKING LOT UNIT, START TIME, END TIME, DATE AND TOTAL FEE TEXTS*/}
                    
                </View>

                {/* CANCEL UPCOMING RESERVATION BUTTON*/}
                <TouchableOpacity 
                    style={styles.cancelButton}
                    onPress={() => this.props.navigation.navigate('Home')} >
                        <Text style={styles.cancelResText}>Cancel Reservation</Text>
                </TouchableOpacity>
                {/* CANCEL UPCOMING RESERVATION BUTTON*/}

                {/* RECENT RESERVATIONS LIST WITH EXAMPLES */}
                <Text style={styles.reserveRecentHeader}>Recent Reservations</Text>
                <View style={styles.listContainer} >
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin1}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>    
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin1}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin1}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin1}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin1}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.innerListContainer}  >
                        <Text style={styles.recentInfo}>10/01/19</Text>
                        <Text style={styles.carparkLotInfo}>G - 21</Text>
                        <Text style={styles.recentInfo}>13 p.m</Text>
                        <Image style={styles.coin1}
                            source={require('../../images/coin.png')}/>
                        <Text style={styles.recentInfo}>10</Text>
                    </View>  
                </View>
                <View style={styles.plainContainer}/>
                {/* RECENT RESERVATIONS LIST WITH EXAMPLES */}

                </ScrollView> 

                {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}
                <View style={styles.navbar}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/homeiconlight.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Wallet')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/walleticon.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('History')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/historyicon.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/settingsicon.png')}/>
                </TouchableWithoutFeedback>
                {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}  
                
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
mainContainer: {
    flex: 1,
    backgroundColor: '#FFFF'
},
upcomingHeader: {
    fontFamily: 'Avenir',
    fontSize: 22,
    marginLeft:  13,
    marginTop: Platform.OS === 'ios' ?  40 : 15,
    fontWeight: '800'
},
backImage: {
    height: 350,
    width: Platform.OS === 'ios' ? 420 : 460,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 15,
      
},
menu: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginTop: 50
},
settings: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginLeft: 330,
    marginTop: 48
},
headerText: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: Platform.OS === 'ios' ?140:135,
    fontSize: 20,
    
    fontFamily: 'Avenir',
    fontWeight: Platform.OS === 'ios' ?'100':'700',
    color:'#FFFF'
    
},
parkingLotText: {
    position: 'absolute',
    marginTop: 45,
    marginLeft: 100,
    //alignSelf: 'center',
    color: "#FFFF",
    fontFamily: 'Avenir',
    fontSize: 65,
    fontWeight: '700'
},
startEndDateContainer: {
    position: 'absolute',
    marginTop: 139, 
    marginLeft: 110,
},
startTimeHeaderText: {
    marginBottom: 38,
    color: "#FFFF",
    fontFamily: 'Avenir',
    fontSize: 14

},
timedateContainer: {
    position: 'absolute',
    marginTop: 136, 
    marginLeft: 210,

},
startTimeDateText: {
    color: '#FFFF',
    marginBottom: Platform.OS === 'ios' ? 34.5:30,
    fontSize: Platform.OS === 'ios' ? 19:20
},
priceContainer: {
    position: 'absolute',
    marginTop: 4
    
},
coin: {
    position: 'absolute',
    height: 35,
    width: 35,
    marginTop: 290,
    marginLeft: 140
},
coinText: {
    color: '#FFFF',
    position: 'absolute',
    height: 35,
    width: 35,
    marginTop: 288,
    marginLeft: 200,
    fontSize: 30
},
allInfoContainer: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 80 : 55,
    marginLeft: Platform.OS === 'android' ? 19 : 0
},
cover: {
    height: 350,
    width: Platform.OS === 'ios' ?  350 : 380,
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 80 : 56,
    borderRadius: 15,
    backgroundColor: '#2d3436',
    position: 'absolute',
    opacity: Platform.OS === 'ios' ?  0.55 : 0,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.9,
    shadowRadius: 16.00,
    elevation: 24,
},
cancelButton: {
    backgroundColor: '#c23616',
    margin: 12,
    width: 200,
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
cancelResText: {
    color: 'white',
    marginTop: 10,
    fontSize: 17,
    fontFamily: 'Avenir',
    alignSelf: 'center'

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
bookingstatus: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 26,
    fontWeight: '900',
    fontFamily: 'Avenir'
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
},
reserveRecentHeader: {
    fontFamily: 'Avenir',
    fontSize: 22,
    marginLeft: 13
},
plainContainer: {
    backgroundColor: '#f5f6fa',
    height:3,
    width: 400,
    alignSelf: 'center',
    marginTop: 15
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
coin1: {
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

})
