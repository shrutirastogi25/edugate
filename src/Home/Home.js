/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
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
      <View style={{flex:6}}>
        <View style={{flex:5}}>
          <Text>ProfileScreen</Text>
          <TouchableHighlight></TouchableHighlight>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1}} onPress={()=>this.onClickListener('profilescreen')}><Text>Profile</Text></TouchableOpacity>
          <TouchableOpacity style={{flex:1}} onPress={()=>this.onClickListener('homescreen')}><Text>Home</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
