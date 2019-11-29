import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


let styles = StyleSheet.create({
    backgroundImage:{
      height: '100%',
      width: '100%',
      resizeMode: 'contain'  
    
    },
    container: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 2   
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    logo:{
      height: 200,
      width: 250,
      position: 'absolute',
      top: hp('1.5%'),
      left: wp('20%')
    },
    tagline:{
      position: 'absolute',
      top: hp('25%'),
      left: wp('12.5%'),
      textAlign: 'center',
      width: 300,
      fontSize: 18,
      color:'black',
      fontStyle: 'italic',
      zIndex: 3
    },
    placeholderViewEmail:{

      width: wp('80%'),
      position: 'absolute',
      top: hp('40%'),
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderColor: 'rgba(0,0,0,0.4)',
      left: wp('12%'),
      paddingLeft: 15
    },
    placeholderEmail:{
      height: 55,
      width: wp('80%'),
      fontSize: 18
    },
    placeholderViewPassword:{
      width: wp('80%'),
      position: 'absolute',
      top: hp('55%'),
      borderLeftWidth: 1,
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'rgba(0,0,0,0.4)',
      left: wp('12%'),
      paddingLeft: 15
    },
    submit: {
      width: wp('40%'),
      height: 50,
      position: 'absolute',
      top: hp('68%'),
      left: wp('32%'),
      backgroundColor: 'purple',
      borderTopLeftRadius:5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius:5,
      borderTopRightRadius: 5
    },
    submitText: {
      fontSize: 19.5,
      textAlign: 'center',
      paddingTop: 10,
      color: 'yellow'
    }

});

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image source={require('./img/business-meeting.jpg')} style={styles.backgroundImage} /> 
        <View style={styles.overlay}></View>
        {/* logo image */}
        <Image source={require('./img/b2b-trans.png')} style={styles.logo}/>
        <Text style={styles.tagline}>Your gateway to investment opportunities across the African continent</Text>
        <View style={styles.placeholderViewEmail}>
          <TextInput placeholder="Email address" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.placeholderViewPassword}>
          <TextInput placeholder="Password" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.submit}><Text style={styles.submitText}>Sign in</Text></View>
      </View>
       
      
    );
  }
}