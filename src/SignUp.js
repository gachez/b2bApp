import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
      left: wp('15%'),
      textAlign: 'center',
      width: wp('70%'),
      fontSize: 18,
      color:'rgba(0,0,0,0.7)',
      fontStyle: 'italic',
      zIndex: 3
    },
    placeholderViewFullName:{
        width: wp('80%'),
        position: 'absolute',
        top: hp('38%'),
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderTopLeftRadius:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        borderTopRightRadius: 20,
        borderColor: 'rgba(0,0,0,0.5)',
        left: wp('10%'),
        paddingLeft: 15
    },
    placeholderFullName: {
        height: 55,
        width: wp('80%'),
        fontSize: 18,
        color: 'black'
    },
    placeholderViewEmail:{

      width: wp('80%'),
      position: 'absolute',
      top: hp('50%'),
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderColor: 'rgba(0,0,0,0.5)',
      left: wp('10%'),
      paddingLeft: 15
    },
    placeholderEmail:{
      height: 55,
      width: wp('80%'),
      fontSize: 18,
      color: 'black'
    },
    placeholderViewPassword:{
      width: wp('80%'),
      position: 'absolute',
      top: hp('62%'),
      borderLeftWidth: 2,
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderRightWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'rgba(0,0,0,0.5)',
      left: wp('10%'),
      paddingLeft: 15
    },
    submit: {
      width: wp('40%'),
      height: 50,
      position: 'absolute',
      top: hp('75%'),
      left: wp('30%'),
      backgroundColor: 'white',
      borderTopLeftRadius:5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius:5,
      borderTopRightRadius: 5,
      borderTopWidth: 2,
      borderBottomWidth:2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderColor: 'rgba(0,0,0,0.6)'
    },
    submitText: {
      fontSize: 19.5,
      textAlign: 'center',
      paddingTop: 10,
      color: 'rgba(0,0,0,0.6)'
    },
    signin: {
        position: 'absolute',
        top: hp('85%'),
        left: wp('30%')
    },
    haveAccount: {
        width: wp('50%'),
        fontSize: 16,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'bold'
    },
    login: {
        fontSize: 18,
        color: 'rgba(255, 195, 10 ,1)',
        paddingLeft: 52.5,
        fontWeight: 'bold'
    }

});

export default class SignUpScreen extends Component {

  static navigationOptions = {
    title: 'Sign Up'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Image source={require('../img/business-meeting.jpg')} style={styles.backgroundImage} /> 
        <View style={styles.overlay}></View>
        {/* logo image */}
        <Image source={require('../img/b2b-trans.png')} style={styles.logo}/>
        <Text style={styles.tagline}>Your gateway to investment opportunities across the African continent</Text>
        <View style={styles.placeholderViewFullName}>
          <TextInput placeholder="Full name" style={styles.placeholderFullName}/>
        </View>
        <View style={styles.placeholderViewEmail}>
          <TextInput placeholder="Email address" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.placeholderViewPassword}>
          <TextInput placeholder="Password" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.submit}><Text style={styles.submitText}>Sign Up</Text></View>
      
          <View style={styles.signin}>
            <Text style={styles.haveAccount}>Already have an account?</Text>
            <Text onPress={() => navigate('SignIn')} style={styles.login}>Sign in.</Text>   
          </View>  
           
       
      </View>
       
      
    );
  }
}