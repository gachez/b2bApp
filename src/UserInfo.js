import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationEvents } from 'react-navigation';


let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 2   
      },
    backgroundImage:{
        height: '100%',
        width: '100%',
        resizeMode: 'contain'  
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
      },
      infoTextView:{
          position: 'absolute',
          top: hp('5%'),
          left: wp('5%'),
          width: wp('95%')
      }
      ,
      infoText: {
          fontSize: 20,
          color: 'rgba(0,0,0,0.8)'
      }
})
export default class UserInfo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../img/business-meeting.jpg')} style={styles.backgroundImage}/>
                <View style={styles.overlay}></View>
                <View style={styles.infoTextView}>
                  <Text style={styles.infoText}>To help us serve you better and keep you updated on the latest opportunities
                      please fill in the details below
                  </Text>
                </View>

            </View>
        )
    }
}