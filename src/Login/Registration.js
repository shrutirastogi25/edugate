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
  onClickListener = () => {
    this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Color.Gray,
        }}>
        <TouchableOpacity onPress={() => this.onClickListener('back')}>
          <Text>Registration Screen(to profile Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
