import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Button, ScrollView, TouchableWithoutFeedback, Platform, TouchableOpacity  } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';
import * as firebase from 'react-native-firebase';



export default class Home extends Component {

    

    
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
          chosenDate: '',
          isEndTimeVisible: false,
          selectedTime: ''
        };
      }
    
    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
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

    handleTimePicker = (time) => {
        this.setState({ 
            isEndTimeVisible: false,
            selectedTime: moment(time).format('HH:mm')
        })
    }

   

    showTimePicker = () => {
        this.setState({
            isEndTimeVisible: true
        })
    }

    hideTimePicker = () => {
        this.setState({
            isEndTimeVisible: false,
            
        })
    }


    render() {
        return (
            <View style={styles.mainContainer}>
            <ScrollView>
                <View> 
                    <Text style={styles.headerText}>Reserve @ UCSI</Text>
                    <Image 
                        style={styles.map}
                        source={require('../../images/mapblur.png')}/>
                    <View style={styles.cover}/>


                    {/*  AFTER CHOOSING DATE & TIME, TEXT WILL BE DISPLAYED ON THE MAP */}
                    <Text style={styles.datetimeText}>
                        {this.state.chosenDate}
                    </Text>

                    {/*  CHOOSE DATETIME BUTTON */}
                    <TouchableOpacity style={styles.timePickerButton} onPress={this.showPicker} underlayColor="white" >
                        <Text style={styles.datetimeButtonText}>Choose date & time</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'datetime'}
                        titleIOS={'Pick date & time'} 
                    />


                    {/*  AFTER CHOOSING END TIME, TEXT WILL BE DISPLAYED ON THE MAP */}
                    <Text style={styles.endTimeText}>
                        {this.state.selectedTime}
                    </Text>

                    {/*  CHOOSE END TIME BUTTON */}
                    <TouchableOpacity  style={styles.endTimePickerButton} onPress={this.showTimePicker} underlayColor='white' >
                        <Text style={styles.datetimeButtonText} >End time</Text>
                    </TouchableOpacity >
                    <DateTimePicker
                        isVisible={this.state.isEndTimeVisible}
                        onConfirm={this.handleTimePicker}
                        onCancel={this.hideTimePicker}
                        titleIOS={'Pick end time'}
                        mode={'time'}
                    />
                </View>

                {/*  RESERVE BUTTON  */}
                <TouchableOpacity 
                    style={styles.reserveButton}
                    onPress={() => this.props.navigation.navigate('Payment')} >
                        <Text style={styles.reservetextButton}>Reserve Parking</Text>
                </TouchableOpacity>
                <Text style={styles.reserveRecentHeader}>Recent Reservations</Text>

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
                 {/*  RECENT RESERVATIONS LIST WITH EXAMPLES*/}


            </ScrollView>

             {/*  NAVIGATION BAR THAT CONSISTS OF HOME, PAYMENT DETAILS, RESERVATION HISTORY & SETTINGS BUTTONS */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={styles.homeBar}
                            source={require('../../images/homeiconlight.png')}/>
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
        //backgroundColor: 'gray'
    },
    map: {
        height: 400,
        width: Platform.OS === 'ios' ? 350 : 380,
        alignSelf: 'center',
        marginTop: 2,
        borderRadius: 15,
          
    },
    headerText: {
        
        marginTop: Platform.OS === 'ios' ? 33 : 8,
        marginLeft: 16,
        fontSize: 30,
        fontFamily: 'Avenir',
        fontWeight: Platform.OS === 'ios' ? '900' : '900',
        color: 'black'
        
    },
    datetimeText: {
        color: 'black',
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 270 : 230,
        marginLeft: 20,
        fontSize: 38,
        marginRight: 90,

        
    },
    endTimeText: {
        color: '#eb4d4b',
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 315 : 275,
        marginLeft: 125,
        fontSize: 38,
        marginRight: 0,

    },
    endTimePickerButton: {
        backgroundColor: '#b8e994',
       
        margin: 12,
        width: 330,
        borderRadius: 15,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 420 : 390,
        height: 39,
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
        color: "#2d3436",
        alignSelf: 'center',
        marginTop: 8,
        fontSize: 17,
        fontFamily: 'Avenir'
    },
    timePickerButton: {
        backgroundColor: '#b8e994',
        margin: 12,
        width: 330,
        borderRadius: 15,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: Platform.OS === 'ios'  ? 370 : 335,
        height: 39,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    cover: {
        height: 400,
        width: 350,
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 76 : 50,
        borderRadius: 15,
        backgroundColor: '#2d3436',
        position: 'absolute',
        opacity: Platform.OS === 'ios' ?0.3:0,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
            height: 12,
        },
        shadowOpacity: 0.9,
        shadowRadius: 16.00,
        elevation: 24,
    },
    reserveButton: {
        backgroundColor: '#6BC15B',
        margin: 12,
        width: 170,
        borderRadius: 15,
        height: 40,
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
    reservetextButton: {
        color: "#FFFF",
        alignSelf: 'center',
        marginTop: 8,
        fontSize: 17,
        fontFamily: 'Avenir'
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
         marginTop: Platform.OS === 'ios' ? 15 : 14,
         fontFamily: 'Avenir',
         fontSize: Platform.OS === 'ios' ? 14 : 16,
         fontWeight: '900'
        
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
