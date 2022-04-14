import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class ViewTransactions extends Component {

    static navigationOptions = {
      header: null
    }

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['ReceiptNo', 'AmountPaid', 'PaymentNo', 'LotNo',],
          tableData: [
            ['95890', '20', '1012', 'G-12',],
            ['24572', '40', '1013', 'G-34',],
            ['95890', '20', '1012', 'G-12',],
            ['24572', '40', '1013', 'G-34',],
            ['95890', '20', '1012', 'G-12',],
            ['24572', '40', '1013', 'G-34',],
            ['95890', '20', '1012', 'G-12',],
            ['24572', '40', '1013', 'G-34',],
            
  
            

            
          ]
        }
      }
     
      render() {
        const state = this.state;
        return (
            <View style={styles.mainContainer}>
                
                <View style={styles.topBar}/>
                
                
                {/*  BACK BUTTON */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Back')}>
                    <Image 
                        style={styles.backButton}
                        source={require('../../images/backlight.png')}/>
                </TouchableOpacity>
                {/*  BACK BUTTON */}


                {/*  THIS SECTION CONSISTS OF ROWS & COLUMNS ACCORDING TO THE METHODS ABOVE */}
                <Text style={styles.headerText}>Transactions</Text>
                <ScrollView>
                    <View style={styles.table}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.headText}/>
                        <Rows data={state.tableData} textStyle={styles.text}/>
                        </Table>
                    </View>
                </ScrollView>
                {/*  THIS SECTION CONSISTS OF ROWS & COLUMNS ACCORDING TO THE METHODS ABOVE */}
                
            </View>
        
        )
      }
    }
     
    const styles = StyleSheet.create({
      table: { 
         marginTop: 0,
        //  padding: 16, 
        //  paddingTop: 100, 
          
        },
      headText:{
            margin: 6,
            fontSize: 13
        },
      head: { 
          height: 40, 
          backgroundColor: '#f1f8ff' 
        },

      text: { 
          margin: 6, 
          fontSize: 12
        },
      mainContainer: {
          flex: 1,
          backgroundColor: '#fff' 
        },
      topBar: {
            height: Platform.OS === 'ios' ? 99 : 70,
            width: Platform.OS === 'ios' ? 380 : 420,
            backgroundColor: '#6BC15B',
            alignSelf: 'center',
            borderRadius: 15,
            marginTop: Platform.OS === 'ios' ? 0 : -4
        },
        backButton: {
            marginLeft: 10,
            marginTop: -50,
            height: 30,
            width: 30,
            position: 'absolute'
        },
        headerText: {
            position: 'absolute',
            color: '#FFFF',
            fontSize: 24,
            alignSelf: 'center',
            marginTop: Platform.OS === 'ios' ? 48.5 : 15,
            fontFamily: 'Avenir'
        },

    });