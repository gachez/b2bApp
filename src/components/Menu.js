import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class Menu extends Component{
    render(){
        return(

<View style={{
    width: wp('100%'),
    height: 50
}}>
   <Image source={require('../../img/icons/menu.png')} style={{top: 20,width: 35, height: 30, left: wp('85%'), resizeMode: 'contain'}}/> 
        </View>   )}}
