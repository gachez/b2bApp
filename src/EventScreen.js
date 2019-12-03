import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




let styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'   
      },
      eventDP: {
          width: wp('100%'),
          height: hp('40%')
      },
      title: {
          top: 15,
          left: 10,
          fontSize: 25,
          fontWeight: 'bold'
      },
      eventVenue: {
          left:15,
          top: 18,
          fontSize: 20,
          fontWeight: "bold",
          color: 'rgba(0,0,0,0.7)'
      },
      eventDescription: {
          left: 10,
          top: 25,
          fontSize: 16,
          width: wp('85%'),
          textAlign: 'justify'
      },
      attendBtn: {
          position: 'absolute',
          top:hp('75%'),
          left: 10,
          width: wp('65%'),
          height: 70,
          borderLeftWidth: 2,
   
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderColor: 'rgba(255, 195, 0, 0.8)',
          flexDirection: 'row'
      },
      attendText: {
          width: '80%',
          textAlign: 'center',
          fontSize: 26,
          fontWeight: 'bold',
          top: 10,
          left: 25,
          color: 'rgba(0,0,0,0.8)'
      }
})
export default class EventsScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
              <View style={styles.eventDP}>
              <Image  style={{flex: 1,width: undefined, height: undefined}}source={require('../img/event.jpeg')}/>
              </View>

              <View>
                  <Text style={styles.title}>Special Agribusiness event</Text>
                  <Text style={styles.eventVenue}>KICC, Ground Floor - Nairobi, Kenya</Text>
                  <Text style={styles.eventDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum tempus lorem ut congue.
                    Suspendisse potenti. Ut finibus, lacus quis pretium euismod, lorem dolor viverra nunc, in volutpat sem justo vitae eros. 
                    Etiam tempor laoreet odio id vehicula. Nam luctus risus et ipsum elementum, 
                    eget finibus urna laoreet..</Text></View>
            <TouchableOpacity style={styles.attendBtn}>
                <Text style={styles.attendText}>Want to attend?</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={{width: 70, height: 70, position: 'absolute',
                    top: hp('75%'),
                    left: wp('67%'),
                    borderRightWidth: 2,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: 'rgba(255, 195, 0, 0.8)'
        }}> 
                <Image style={{
                    top: 5,
                    left: 5,
                    width: 50,
                    height: 50
                }} source={require('../img/icons/tick.png')}/>
            </TouchableOpacity>

            </View>
        )
    }
}