/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Color from '../Utils/Color';

export default class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  onClickListener = obj1 => {
    if (obj1 === 'login') {
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    } else {
      this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Color.White,
        }}>
        <TouchableOpacity onPress={() => this.onClickListener('login')}>
          <Text>Home Screen(to login screen)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onClickListener('profile')}>
          <Text style={{marginTop: '10%'}}>Home Screen(to profile screen)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
