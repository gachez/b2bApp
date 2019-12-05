import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
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
          left: wp('14%'),
          width: wp('95%')
      }
      ,
      infoText: {
          fontSize: 25,
          color: 'rgba(0,0,0,0.6)',
          fontWeight: 'normal'
      },
      option1: {
        height: 60,
        paddingLeft: 5,
        position: 'absolute',
        top: hp('20%'),
        left: wp('2.5%'),
        width: wp('95%'),
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        borderTopRightRadius: 20
      },
      optionText: {
        textAlign: 'center',
        paddingTop: 12,  
        fontSize: 25         
      },
      option2: {
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
        borderTopLeftRadius:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        borderTopRightRadius: 20,
        borderColor: 'rgba(0,0,0,0.6)'
      },
      option3: {
        height: 60,
        paddingLeft: 5,
        position: 'absolute',
        top: hp('40%'),
        left: wp('2.5%'),
        width: wp('95%'),
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        borderTopRightRadius: 20,
        borderColor: 'rgba(0,0,0,0.6)'
      },
      option4: {
        height: 60,
        paddingLeft: 5,
        position: 'absolute',
        top: hp('50%'),
        left: wp('2.5%'),
        width: wp('95%'),
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        borderTopRightRadius: 20,
        borderColor: 'rgba(0,0,0,0.6)'
      },
      option5: {
        height: 60,
        paddingLeft: 5,
        position: 'absolute',
        top: hp('60%'),
        left: wp('2.5%'),
        width: wp('95%'),
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        borderTopRightRadius: 20,
        borderColor: 'rgba(0,0,0,0.6)'
      },
      button: {
          height: 60,
          position: 'absolute',
          top: hp('73%'),
          width: wp('47.5%'),
          borderColor: 'rgba(255, 195, 0,0.6)',
          borderTopWidth: 2,
          borderBottomWidth:2,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderTopLeftRadius:20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius:20,
          borderTopRightRadius: 20,
          left: wp('26.25%')
      },
      buttonText: {
        textAlign: 'center',
        paddingTop: 13,  
        fontSize: 25,
        color: 'rgba(255, 195, 0,1)' 
      }

})
export default class SelectInterest extends Component{

    state = {
        background: 'white',
        border: 'rgba(0,0,0,0.6)',
        color: 'rgba(0,0,0,0.6)'
    }

    render(){
      const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('../img/business-meeting.jpg')} style={styles.backgroundImage}/>
                <View style={styles.overlay}></View>
                <View style={styles.infoTextView}>
                  <Text style={styles.infoText}>
                      What are you interested in?
                  </Text>
                </View>
               <TouchableOpacity onPress={
                       () =>{
                        
                            this.setState({
                                background: 'rgba(255, 195, 0, 0.9)',
                                color: 'white'
                            })
                           
                    
                       }
                   }
                   style={[styles.option1, {
                                            backgroundColor: this.state.background,
                                            borderColor: this.state.border
                        
                        }]}>
                   <Text style={[styles.optionText,{color: this.state.color}]} > Fintech</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.option2}>
                   <Text style={[styles.optionText,{color: this.state.color}]}> Information Technology</Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={styles.option3}>
                   <Text style={[styles.optionText,{color: this.state.color}]}> Healthcare</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.option4}>
                   <Text style={[styles.optionText,{color: this.state.color}]}> Agriculture</Text>
               </TouchableOpacity>               
                
               <TouchableOpacity style={styles.option5}>
                   <Text style={[styles.optionText,{color: this.state.color}]}> Energy</Text>
               </TouchableOpacity> 

               <TouchableOpacity style={styles.button} onPress={
                 () =>{
                  navigate('EventsScreen')
                 }
               }>
                   <Text style={styles.buttonText}>Continue</Text>     
               </TouchableOpacity>                 
            </View>
        )
    }
}