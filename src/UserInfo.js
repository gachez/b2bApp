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
          left: wp('3.5%'),
          width: wp('95%')
      }
      ,
      infoText: {
          fontSize: 20,
          color: 'rgba(0,0,0,0.6)',
          fontWeight: 'normal'
      },
      company: {
          height: 60,
          paddingLeft: 5,
          position: 'absolute',
          top: hp('30%'),
          left: wp('2.5%'),
          width: wp('95%'),
          borderTopWidth: 1,
          borderBottomWidth:1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopLeftRadius:5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius:5,
          borderTopRightRadius: 5,
          borderColor: 'rgba(0,0,0,0.7)'
      },
      companyText: {
          fontSize: 20,
          color: 'rgba(0,0,0,0.7)'
      },

      position: {
          height: 60,
          paddingLeft: 5,
          position: 'absolute',
          top: hp('45%'),
          left: wp('2.5%'),
          width: wp('95%'),
          borderTopWidth: 1,
          borderBottomWidth:1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopLeftRadius:5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius:5,
          borderTopRightRadius: 5,
          borderColor: 'rgba(0,0,0,0.5)'
      },
      PositionText: {
          fontSize: 20,
          color: 'rgba(0,0,0,0.5)'
      },
      nextView: {
          position: 'absolute',
          top: hp('60%'),
          left: wp('70%'),
          borderTopWidth: 1,
          borderBottomWidth:1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopLeftRadius:5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius:5,
          borderTopRightRadius: 5,
          width: 100,
          height: 50,
          paddingLeft: 18,
          paddingTop:5,
          borderColor: 'rgba(0,0,0,0.5)'
      },
      nextText: {
          fontSize: 24,
          fontWeight: "normal",
          color: 'rgba(0,0,0,0.5)'
      }

})
export default class UserInfo extends Component{
 
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('../img/business-meeting.jpg')} style={styles.backgroundImage}/>
                <View style={styles.overlay}></View>
                <View style={styles.infoTextView}>
                  <Text style={styles.infoText}>To help us serve you better and keep you updated on the latest opportunities
                      please fill in the details below
                  </Text>
                </View>
                <View style={styles.company}>
                  <TextInput placeholder="Company" style={styles.companyText}></TextInput>
                </View>

                <View style={styles.position}>
                  <TextInput placeholder="Position" style={styles.PositionText}></TextInput>
                </View>

                <View style={styles.nextView}>
                    <Text style={styles.nextText}  onPress={
            () => navigate('SelectInterest')
        }>Next </Text>
                </View>
                
            </View>
        )
    }
}