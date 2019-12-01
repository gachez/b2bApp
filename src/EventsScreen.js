import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationEvents } from 'react-navigation';



let styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'   
      },
      eventBar: {
        width: wp('90%'),
        height: hp('30%'),
        position: 'relative',
        top: hp('15%'),
        left: wp('5%'),
        borderTopWidth: 2,
        borderBottomWidth:2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopLeftRadius:5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius:5,
        borderTopRightRadius: 5,
        borderColor: 'rgba(0,0,0,0.8)' 
      }

})
export default class EventsScreen extends Component{

    state = {

    }

    render(){
        return(
            <View style={styles.container}>

              <TouchableOpacity style={styles.eventBar}>
                  
              </TouchableOpacity>
                            
            </View>
        )
    }
}