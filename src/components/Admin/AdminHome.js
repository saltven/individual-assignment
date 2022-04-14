import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, TouchableOpacity, Platform } from 'react-native'

export default class AdminHome extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View styles={styles.mainContainer}>
                <View style={styles.topBar}/>
                <StatusBar barStyle='light-content' />
                <Text style={styles.walletText}>Admin</Text>

                {/*  RESERVATION LIST BUTTON */}
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => this.props.navigation.navigate('ReservationList')}>
                        <Text style={styles.reserveText}>View Reservations</Text> 
                </TouchableOpacity>
                {/*  RESERVATION LIST BUTTON */}


                {/*  TRANSACTION LIST BUTTON */}
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => this.props.navigation.navigate('TransactionList')}>
                        <Text style={styles.reserveText}>View Transactions</Text>
                </TouchableOpacity>
                {/*  TRANSACTION LIST BUTTON */}


                {/*  VIEW USERS BUTTON */}
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => this.props.navigation.navigate('UserList')}>
                        <Text style={styles.reserveText}>View Users</Text>
                </TouchableOpacity>
                {/*  VIEW USERS BUTTON */}


                {/*  LOG OUT BUTTON */}
                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.reserveText}>Log out</Text>
                </TouchableOpacity>
                {/*  LOG OUT BUTTON */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    topBar: {
        height: Platform.OS === 'ios' ? 99 : 70,
        width: Platform.OS === 'ios' ? 380 : 420,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: Platform.OS === 'ios' ? 0 : -3
    },
    walletText: {
        position: 'absolute',
        color: '#FFFF',
        fontSize: 24,
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 48.5 : 15,
        fontFamily: 'Avenir'
    },
    buttons: {
        height: Platform.OS === 'ios' ? 70 : 70,
        width: Platform.OS === 'ios' ? 200 : 200,
        backgroundColor: '#6BC15B',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: Platform.OS === 'ios' ? 80:65
    },
    reserveText: {
        position: 'absolute',
        color: '#FFFF',
        fontSize: 19,
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: 'Avenir'
    },
    logoutButton: {
        height: Platform.OS === 'ios' ? 70 : 70,
        width: 120,
        backgroundColor: '#c0392b',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: Platform.OS === 'ios' ? 80 : 60
    }
})
