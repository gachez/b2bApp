import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationEvents } from 'react-navigation';
import Menu from './components/Menu'


let styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'   
      },
      eventBar: {

      }

})
export default class EventsScreen extends Component{

    state = {

    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
            <Menu />
            {/* options at the top either upcoming or ongoing events */}
            <View style={{flexDirection: 'row', position: 'absolute', top: hp('11.5%'), width: wp('100%')}}>
            <TouchableOpacity style={{
                            width: wp('40%'),
                            height: 59,
                            left: wp('7.5%'),
                            borderTopWidth: 2,
                            borderBottomWidth:2,
                            borderLeftWidth: 2,
                            borderRightWidth:2,

                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            borderColor: 'rgba(0,0,0,0.5)'                 
            }}><Text style={{fontSize: 25, color: 'rgba(0, 0, 0,0.9)',fontWeight: 'bold', paddingTop: 10, paddingLeft: 25}}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                            width: wp('40%'),
                            height: 59,
                            left: wp('11.5%'),
                            borderColor: 'rgba(0,0,0,0.2)',
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth:1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25                 
            }}><Text style={{fontSize: 25, paddingTop: 10, paddingLeft: 25, color: 'rgba(0,0,0,0.5)'}}>Ongoing</Text></TouchableOpacity>
            </View>
            
            
            <View style={{flex: 1}}>
            {/* events scroll view */}
            <ScrollView style={{ top: hp('15%'), width: wp('100%')}}>
                {/* the first event card */}
                <TouchableOpacity 
                onPress={()=>{navigate('EventScreen')}}
                style={{
                            width: wp('95%'),
                            height: 200,
                            left: wp('2.5%'),
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            borderColor: 'rgba(0,0,0,0.5)',
                            flexDirection: 'row' 
                }}>
                   <View style={{width: '70%', height: '70%'}}>
                        
                       <Text style={{
                            paddingTop: 20,
                            paddingLeft:10,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>Special Agribusiness event - Come and network with vendors in the agriculture industry an...
                        </Text>
                    </View> 
                    
                        <View style={{width: '30%', height: '100%' }}>
                        <Image style= {{flex:1 , width: undefined, height: undefined}}    
                        source={require('../img/event.jpeg')}
                            />
      
                      </View>
                      <View style={{width: '70%',
                                    height: '30%', 
                                    position: 'absolute',
                                    top: '70%',
                                    left: 0,
                                    flexDirection: 'row'
                       }}>
                           <Image style={{width: 38, height: 38, left: 10}} source={require('../img/icons/calendar.png')}/>
                           <Text style={{fontSize: 20.5, color: 'rgba(0,0,0,0.5)', left: '35%'}}>28 Jan 6am - 6pm</Text>
                      </View>
                </TouchableOpacity>
             {/* end of first card */}
            
            {/* second card */}
             <TouchableOpacity  style={{
                            top: 15,
                            width: wp('95%'),
                            height: 200,
                            left: wp('2.5%'),
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            borderColor: 'rgba(0,0,0,0.5)',
                            flexDirection: 'row' 
                }}>
                   <View style={{width: '70%', height: '70%'}}>
                        
                       <Text style={{
                            paddingTop: 20,
                            paddingLeft:10,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>The Second annual tech event - Come and network with vendors in the ICT industry an...
                        </Text>
                    </View> 
                    
                        <View style={{width: '30%', height: '100%' }}>
                        <Image style= {{flex:1 , width: undefined, height: undefined}}    
                        source={require('../img/open-events.jpg')}
                            />
      
                      </View>
                      <View style={{width: '70%',
                                    height: '30%', 
                                    position: 'absolute',
                                    top: '70%',
                                    left: 0,
                                    flexDirection: 'row'
                       }}>
                           <Image style={{width: 38, height: 38, left: 10}} source={require('../img/icons/calendar.png')}/>
                           <Text style={{fontSize: 20.5, color: 'rgba(0,0,0,0.5)', left: '35%'}}>28 Jan 6am - 6pm</Text>
                      </View>
                </TouchableOpacity>
                {/* third card */}
                <TouchableOpacity  style={{
                            top: 30,
                            width: wp('95%'),
                            height: 200,
                            left: wp('2.5%'),
                            borderTopWidth: 1,
                            borderBottomWidth:1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopLeftRadius:25,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius:25,
                            borderTopRightRadius: 25,
                            borderColor: 'rgba(0,0,0,0.5)',
                            flexDirection: 'row' 
                }}>
                   <View style={{width: '70%', height: '70%'}}>
                        
                       <Text style={{
                            paddingTop: 20,
                            paddingLeft:10,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>The African summit for event - Come and network with vendors in the ICT industry an...
                        </Text>
                    </View> 
                    
                        <View style={{width: '30%', height: '100%' }}>
                        <Image style= {{flex:1 , width: undefined, height: undefined}}    
                        source={require('../img/moreevent.jpeg')}
                            />
      
                      </View>
                      <View style={{width: '70%',
                                    height: '30%', 
                                    position: 'absolute',
                                    top: '70%',
                                    left: 0,
                                    flexDirection: 'row'
                       }}>
                           <Image style={{width: 38, height: 38, left: 10}} source={require('../img/icons/calendar.png')}/>
                           <Text style={{fontSize: 20.5, color: 'rgba(0,0,0,0.5)', left: '35%'}}>28 Jan 6am - 6pm</Text>
                      </View>
                </TouchableOpacity> 

                <View style={{height:200}} />
            </ScrollView>
            </View>
            
              
                            
            </View>
        )
    }
}