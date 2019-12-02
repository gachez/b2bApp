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

      }

})
export default class EventsScreen extends Component{

    state = {

    }

    render(){
        return(
            <View style={styles.container}>
            
            <View style={{flexDirection: 'row', position: 'absolute', top: hp('3.5%'), width: wp('100%')}}>
            <TouchableOpacity style={{
                            width: wp('40%'),
                            height: 59,
                            left: wp('7.5%'),
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            backgroundColor: 'rgba(rgba(255, 195, 0,0.9))'                 
            }}><Text style={{fontSize: 25, color: 'rgba(255, 255, 255,0.9)', paddingTop: 10, paddingLeft: 25}}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                            width: wp('40%'),
                            height: 59,
                            left: wp('11.5%'),
                            borderColor: 'rgba(0,0,0,0.2)',
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth:1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25                 
            }}><Text style={{fontSize: 25, paddingTop: 10, paddingLeft: 25, color: 'rgba(0,0,0,0.5)'}}>Ongoing</Text></TouchableOpacity>
            </View>
            
            
            <View style={{flex: 1}}>
            <ScrollView style={{ top: hp('15%'), width: wp('100%')}}>
                <View  style={{
                            width: wp('90%'),
                            height: 250,
                            left: wp('5%'),
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            borderColor: 'rgba(0,0,0,0.5)' 
                }}></View>
                        <View  style={{
                            top: 15,
                            paddingTop: 10,
                            width: wp('90%'),
                            height: 250,
                            left: wp('5%'),
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            borderColor: 'rgba(0,0,0,0.5)' 
                }}></View>
                   <View  style={{
                            top: 30,
                            width: wp('90%'),
                            height: 250,
                            left: wp('5%'),
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            borderColor: 'rgba(0,0,0,0.5)' 
                }}></View>
            </ScrollView>
            </View>
            
              
                            
            </View>
        )
    }
}