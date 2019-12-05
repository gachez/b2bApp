import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationEvents } from 'react-navigation';



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
      width: wp('65'),
      position: 'absolute',
      top: hp('1.5%'),
      left: wp('17.5%')
    },
  
    placeholderViewEmail:{

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
      borderColor: 'rgba(0,0,0,0.3)',
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
      top: hp('48.5%'),
      borderLeftWidth: 2,
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderRightWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'rgba(0,0,0,0.3)',
      left: wp('10%'),
      paddingLeft: 15
    },
    submit: {
      width: wp('40%'),
      height: 50,
      position: 'absolute',
      top: hp('61%'),
      left: wp('30%'),
      backgroundColor: 'white',
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderTopWidth: 2,
      borderBottomWidth:2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderColor: 'rgba(0,0,0,0.4)'
    },
    submitText: {
      fontSize: 19.5,
      textAlign: 'center',
      paddingTop: 10,
      color: 'rgba(0,0,0,0.6)'
    },
    social: {
      position: 'absolute',
      top: hp('71%'),
      left: wp('30%')
    },
    socialText: {
      fontSize: 18,
      color: 'rgba(0,0,0,0.7)',
      fontWeight: 'bold'
    },
    socialFB: {
      position: 'absolute',
      top: hp('78%'),
      left: wp('30%'),
      width: 40,
      height: 40
    },
    socialG: {
      position: 'absolute',
      top: hp('78%'),
      left: wp('44.5%'),
      width: 40,
      height: 40      
    },
    socialLink: {
      position: 'absolute',
      top: hp('78%'),
      left: wp('59.5%'),
      width: 40,
      height: 40
    },
    register: {
      position: 'absolute',
      top: hp('90%'),
      left: wp('15%'),
      flexDirection:'row'
    },
    registerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'rgba(0,0,0,0.7)'
    },
    signup: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'rgba(255, 195, 0 ,0.9)'
    }

});

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Sign In'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Image source={require('../img/business-meeting.jpg')} style={styles.backgroundImage} /> 
        <View style={styles.overlay}></View>
        {/* logo image */}
        <Image source={require('../img/b2b-trans.png')} style={styles.logo}/>
              <View style={styles.placeholderViewEmail}>
          <TextInput placeholder="Email address" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.placeholderViewPassword}>
          <TextInput placeholder="Password" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.submit}><Text onPress={() => navigate('UserInfo')} style={styles.submitText}>Sign in</Text></View>
        <View style={styles.social}>
          <Text style={styles.socialText}>Or sign in with social</Text>
        </View>

        <Image source={require('../img/icons/linkedin.png')} style={styles.socialFB}/>
        <Image source={require('../img/icons/google.png')} style={styles.socialG}/>
        <Image source={require('../img/icons/facebook.png')} style={styles.socialLink}/>
       <View style={styles.register}> 
        <Text style={styles.registerText}>Don't have an account? </Text><Text onPress={
            () => navigate('SignUp')
        }
        style={styles.signup}>Sign Up.</Text>
       </View>
        
      </View>
       
      
    );
  }
}