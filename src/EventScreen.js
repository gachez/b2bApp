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
          height: hp('35%')
      },
      title: {
          top: 15,
          left: 10,
          fontSize: 25,
          fontWeight: 'bold',
          color: 'rgba(255, 195, 10, 1)'
      },
      eventVenue: {
          left:45,
          top: 25,
          fontSize: 18,
          fontWeight: "bold",
          color: 'rgba(0,0,0,0.7)'
      },
      eventDescription: {
          left: 10,
          top: 35,
          fontSize: 16,
          width: wp('85%'),
          textAlign: 'justify'
      },
      attendBtn: {
          position: 'absolute',
          top:hp('80%'),
          left: 10,
          width: wp('65%'),
          height: 70,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 5,
          borderLeftWidth: 2,  
          borderTopWidth: 2,
          borderBottomWidth: 2,
          backgroundColor: 'rgba(255,195,0,0.8)',
          borderColor: 'rgba(255, 195, 0, 0.8)',
          flexDirection: 'row'
      },
      attendText: {
          width: '80%',
          textAlign: 'center',
          fontSize: 26,
          fontWeight: 'bold',
          top: 12,
          left: 25,
          color: 'rgba(0,0,0,1)'
      }
})
export default class EventsScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
              <ScrollView>

                 <View style={styles.eventDP}>
              <Image  style={{flex: 1,width: undefined, height: undefined}}source={require('../img/event.jpeg')}/>
              </View>


            {/* scroll view starts here */}
        
                
            <View>
                  <Text style={styles.title}>Special Agribusiness event</Text>
                  <Image style={{
                      width: 22,
                       height: 22, 
                       position: 'absolute',
                       top: 58,
                       left: 10
                       }} source={require('../img/icons/maps-and-flags.png')}/>
                  <Text style={styles.eventVenue}>KICC, Ground Floor - Nairobi, Kenya</Text>
                  <Text style={styles.eventDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum tempus lorem ut congue.
                    Suspendisse potenti. Ut finibus, lacus quis pretium euismod, lorem dolor viverra nunc, in volutpat sem justo vitae eros. 
                    Etiam tempor laoreet odio id vehicula. Nam luctus risus et ipsum elementum, 
                    eget finibus urna laoreet..</Text></View>
          

            
                <Text style={{
                    position: 'absolute',
                    top: hp('71%'),
                    left: 0,
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'rgba(255, 195, 0, 1)',
                    borderColor:'rgba(0,0,0,0.5)' ,
             
                    padding: 5,
                    paddingLeft: 15,
                    paddingRight: 15
                }}>312</Text>
                <Text style={{
                    position: 'absolute',
                    top: hp('71.75%'),
                    left: wp('18%'),
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'rgba(255, 195, 0, 1)',
              
                    paddingBottom: 8
                }}>Attending</Text> 
   
            <TouchableOpacity style={styles.attendBtn}>
                <Text style={styles.attendText}>Want to attend?</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={{width: 70, height: 70, position: 'absolute',
                    top: hp('80%'),
                    left: wp('67%'),
                    borderRightWidth: 3,
                    borderLeftWidth: 3,
                    borderTopWidth: 3,
                    borderBottomWidth: 3,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderTopRightRadius: 20,
                    borderColor: 'rgba(255, 195, 0, 0.8)'
        }}> 
                <Image style={{
                    top: 15,
                    left: 15,
                    width: 35,
                    height: 35
                }} source={require('../img/icons/tick.png')}/>
            </TouchableOpacity>   
            <View style={{height: 200}}></View>  
              </ScrollView>  
            
            </View>
             

        )
    }
}