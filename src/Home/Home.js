/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TouchableOpacity, Text,Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Color from '../Utils/Color';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  onClickListener = viewId => {
    if(viewId=='profilescreen'){
    this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    }
    else if(viewId=='homescreen'){
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    }
    else if(viewId=='loginscreen'){
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    }
  };

  render() {
    return (
      <View style={{flex:10}}>
        <View style={{flex:9}}>
          <Text>HomeScreen</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1,flexDirection:'row',alignItems:'center',backgroundColor:Color.Gray}} onPress={()=>this.onClickListener('homescreen')}>
          <Image style={{height:50,width:50}}source={require('../Assets/conference.png')} />
            <Text>Home</Text></TouchableOpacity>
          <TouchableOpacity style={{flex:1,flexDirection:'row',alignItems:'center',backgroundColor:Color.Gray}} onPress={()=>this.onClickListener('profilescreen')}>
            <Image style={{height:50,width:50}}source={require('../Assets/profile.png')} />
            <Text>Profile</Text></TouchableOpacity>
          
        </View>
      </View>
    );
  }
}
