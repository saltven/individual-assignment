import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, TouchableOpacity, ScrollView, Platform, TouchableWithoutFeedback, Image } from 'react-native'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

export default class ReservationHistory extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
          chosenDate: '',
          
        };
      }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY')
        })
    }
    
    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    

    hidePicker = () => {
        this.setState({
            isVisible: false,
            
        })
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <StatusBar barStyle='light-content' />
                <View style={styles.topBar}/>
                <Text style={styles.resHistoryText}>Reservation History</Text>


                {/*  CHOOSE DATE BUTTON */}
                <TouchableOpacity style={styles.datePickerButton} onPress={this.showPicker} underlayColor="white" >
                    <Text style={styles.datetimeButtonText}>Choose date</Text>
                </TouchableOpacity>
                {/*  CHOOSE DATE BUTTON */}


                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode={'date'}
                    titleIOS={'Pick date & time'} 
                />

                {/*  AFTER CHOOSING DATE, THE DATE WILL BE DISPLAYED  */}
                <Text style={styles.datetimeText}>
                    {this.state.chosenDate}
                </Text>
                {/*  AFTER CHOOSING DATE, THE DATE WILL BE DISPLAYED  */}


                {/*  CONSISTS OF RESERVATION #, PAYMENT TIME, PAYMENT DATE, START TIME, END TIME, PARKING LOT UNIT AND TOTAL TOKEN TEXTS */}
                <ScrollView style={styles.historyContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <View style={styles.historyInnerContainer}>
                        <View style={styles.headersContainer}>
                            <Text style={styles.headerText}>Reservation #</Text>
                            <Text style={styles.headerText}>Time of Payment</Text>
                            <Text style={styles.headerText}>Date of Payment</Text>
                            <Text style={styles.headerText}>Start Time</Text>
                            <Text style={styles.headerText}>End Time</Text>
                            <Text style={styles.headerText}>Parking Lot</Text>
                            <Text style={styles.headerText}>Total</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>1012</Text>
                            <Text style={styles.infoText}>11:32 a.m</Text>
                            <Text style={styles.infoText}>10/01/19</Text>
                            <Text style={styles.infoText}>12 p.m</Text>
                            <Text style={styles.infoText}>14 p.m</Text>
                            <Text style={styles.infoText}>G - 21</Text>
                            <Text style={styles.infoText}>10 Tokens</Text>
                        </View>
                    </View>
                    <View style={styles.historyInnerContainer}>
                        <View style={styles.headersContainer}>
                            <Text style={styles.headerText}>Reservation #</Text>
                            <Text style={styles.headerText}>Time of Payment</Text>
                            <Text style={styles.headerText}>Date of Payment</Text>
                            <Text style={styles.headerText}>Start Time</Text>
                            <Text style={styles.headerText}>End Time</Text>
                            <Text style={styles.headerText}>Parking Lot</Text>
                            <Text style={styles.headerText}>Total</Text>
                        </View>
                        <View style={styles.infoContainer}>
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
                {/*  CONSISTS OF RESERVATION #, PAYMENT TIME, PAYMENT DATE, START TIME, END TIME, PARKING LOT UNIT AND TOTAL TOKEN TEXTS */}


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
                                source={require('../../images/historyiconlight.png')}/>
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
    topBar: {
        height: Platform.OS === 'ios' ? 99 : 70,
        width: Platform.OS === 'ios' ? 380 : 420,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: Platform.OS === 'ios' ? 0 : -4
    },
    resHistoryText: {
        position: 'absolute',
        color: '#FFFF',
        fontSize: 24,
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 48.5 : 15,
        fontFamily: 'Avenir'
    },
    datePickerButton: {
        backgroundColor: '#686de0',
        margin: 12,
        width: 200,
        borderRadius: 15,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: Platform.OS === 'ios'  ? 150 : 118,
        height: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    datetimeButtonText: {
        color: "#FFFF",
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 17,
        fontFamily: 'Avenir'
    },
    datetimeText: {
        color: 'black',
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 240 : 210,
        marginLeft: 20,
        fontSize: 28,
        marginRight: 90,
        alignSelf: 'center',
        fontFamily: 'Avenir'
    },
    historyContainer: {
        // backgroundColor: 'gray',
        maxHeight: 230,
        width: Platform.OS === 'ios' ? 375 : 412 ,
        alignSelf: 'center',
        marginTop: 200,
        
    },
    historyInnerContainer: {
        height: 220,
        width: Platform.OS === 'ios' ? 320 : 345,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        marginTop: 0,
        borderRadius: 8,
        marginLeft: 5,
        marginRight: 5
        
    },
    headersContainer: {
        marginTop: Platform.OS === 'ios' ? 14: 14,
        marginLeft: 15
    },
    headerText: {
        fontSize: 15,
        marginBottom: Platform.OS === 'ios' ? 10:8,
        fontWeight: '700',
        color: '#FFFF'
    
    },
    infoContainer: {
        position: 'absolute',
        marginLeft: Platform.OS === 'ios' ? 225 : 245,
        marginTop: Platform.OS === 'ios' ? 12 :12
    },
    infoText: {
        marginBottom: Platform.OS === 'ios' ? 7.5 :5,
        fontSize: 17,
        color: '#FFFF'
    },
    navbar: {
        width: Platform.OS === 'ios' ? 390 : 430,
        height: 70,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: Platform.OS === 'ios' ? 213: 184
    },
    homeBar: {
        height: 30,
        width: 30,
        marginRight: 32,
        marginLeft: Platform.OS === 'ios' ? 35 : 43.5,
    },
})
