/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Color from '../Utils/Color';
// import { moderateScale, isTabDevice, isiPhoneX } from '../reusableComponents/DeviceInfo';

export default class ProfileScreen extends Component {
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
  };

  render() {
    return (
      <View style={{flex:6}}>
        <View style={{flex:5}}>
          <Text>ProfileScreen</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1}} onPress={()=>this.onClickListener('profilescreen')}><Text>Profile</Text></TouchableOpacity>
          <TouchableOpacity style={{flex:1}} onPress={()=>this.onClickListener('homescreen')}><Text>Home</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});