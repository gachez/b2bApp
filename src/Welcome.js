import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




let styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'   
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
        logo:{
            height: 200,
            width: 250,
            position: 'absolute',
            top: hp('1.5%'),
            left: wp('20%')
          },
          tagline: {
              position: 'absolute',
              top:hp('25%'),
              width: wp('80%'),
              left: wp('10%'),
              fontSize: 20,
              fontStyle: 'italic',
              color: 'rgba(0,0,0,0.6)',
              textAlign: 'center'
          },
          signInBtn:{
              position:'absolute',
              top: hp('70%'),
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderTopLeftRadius:20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius:20,
              borderTopRightRadius: 20,
              textAlign: 'center',
              borderColor: 'rgba(0,0,0,0.3)',
              width: wp('80%'),
              height: 55,
              left: wp('10%')
          },
          signInText: {
              fontSize: 20,
              color: 'rgba(0,0,0,0.6)',
              textAlign: 'center',
              top: 10,
              fontWeight: 'bold'
          },
          signUpBtn: {
            position:'absolute',
            top: hp('80%'),
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderTopLeftRadius:20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius:20,
            borderTopRightRadius: 20,
            textAlign: 'center',
            borderColor: 'rgba(255, 195, 0, 0.8)',
            width: wp('80%'),
            height: 55,
            left: wp('10%'),
            backgroundColor: 'rgba(255, 195, 0, 0.8)'              
          }
})
export default class WelcomeScreen extends Component{

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
               <Image source={require('../img/business-meeting.jpg')} style={styles.backgroundImage}/>
                <View style={styles.overlay}></View>

                <Image source={require('../img/b2b-trans.png')}
                       style={styles.logo}/>

                <Text style={styles.tagline}>"Your Gateway To Investment Opportunities Across The African Continent"</Text>       
                <TouchableOpacity
                    onPress={() => navigate('SignIn')}
                    style={styles.signInBtn}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.signUpBtn}>
                    <Text style={styles.signInText}>Sign Up</Text>
                </TouchableOpacity>

            </View>
             

        )
    }
}