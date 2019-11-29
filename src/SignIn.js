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
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderColor: 'rgba(0,0,0,0.9)',
      left: wp('12%'),
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
      top: hp('55%'),
      borderLeftWidth: 2,
      borderTopLeftRadius:20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius:20,
      borderTopRightRadius: 20,
      borderRightWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'rgba(0,0,0,0.9)',
      left: wp('12%'),
      paddingLeft: 15
    },
    submit: {
      width: wp('40%'),
      height: 50,
      position: 'absolute',
      top: hp('68%'),
      left: wp('32%'),
      backgroundColor: 'white',
      borderTopLeftRadius:5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius:5,
      borderTopRightRadius: 5,
      borderTopWidth: 2,
      borderBottomWidth:2,
      borderLeftWidth: 2,
      borderRightWidth: 2
    },
    submitText: {
      fontSize: 19.5,
      textAlign: 'center',
      paddingTop: 10,
      color: 'black'
    },
    signup:{
      position: 'absolute',
      top: hp('87%'),
      left: wp('12%'),
      borderBottomWidth: 2
    },
    signupText:{
      fontSize: 18,
      fontWeight: "bold",
      color: 'rgba(95, 16, 150 ,0.99)'
    },
    forgot: {
      position: 'absolute',
      top: hp('87%'),
      left: wp('75%'),
      borderBottomWidth: 2
    },
    forgotText:{
      fontSize: 18,
      fontWeight: "bold",
      color: 'rgba(95, 16, 150 ,0.99)'
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
        <Text style={styles.tagline}>Your gateway to investment opportunities across the African continent</Text>
        <View style={styles.placeholderViewEmail}>
          <TextInput placeholder="Email address" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.placeholderViewPassword}>
          <TextInput placeholder="Password" style={styles.placeholderEmail}/>
        </View>
        <View style={styles.submit}><Text style={styles.submitText}>Sign in</Text></View>
        <View style={styles.signup}>
          <Text style={styles.signupText}>Forgot Password?</Text>
        </View>
        
        <TouchableOpacity style={styles.forgot} onPress={() => navigate('SignUp')}> 
        <View >
          <Text style={styles.forgotText}>Sign Up</Text>
        </View>
        </TouchableOpacity>
       
      </View>
       
      
    );
  }
}