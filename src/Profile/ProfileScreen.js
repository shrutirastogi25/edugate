/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableHighlight,
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
  onClickListener = () => {
    this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
  };

  click = obj1 => {
    console.log('color = ' + obj1);
  };
  // width: '100%', position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'center', height: 50, flexDirection: 'row'
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => this.click('Red')}
          style={{flex: 2, backgroundColor: Color.Red}}
        />
        <TouchableOpacity
          onPress={() => this.click('Green')}
          style={{
            flex: 3,
            backgroundColor: Color.Green,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{elevation: 50}}>
            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.onClickListener()}>
              <Text>Dhruv</Text>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
        <View style={{flex: 4, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => this.click('Silver')}
              style={{flex: 1, backgroundColor: Color.Silver}}
            />
            <TouchableOpacity
              onPress={() => this.click('Black')}
              style={{flex: 1, backgroundColor: Color.Black}}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => this.click('Red')}
                style={{flex: 1, backgroundColor: Color.Red}}
              />
              <TouchableOpacity
                onPress={() => this.click('Grey')}
                style={{flex: 1, backgroundColor: Color.Gray}}
              />
              <TouchableOpacity
                onPress={() => this.click('Green')}
                style={{flex: 1, backgroundColor: Color.Green}}
              />
              <TouchableOpacity
                onPress={() => this.click('Red')}
                style={{flex: 1, backgroundColor: Color.Red}}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.click('Black')}
                style={{flex: 1, backgroundColor: Color.Black}}
              />
              <TouchableOpacity
                onPress={() => this.click('Grey')}
                style={{flex: 1, backgroundColor: Color.Gray}}
              />
              <TouchableOpacity
                onPress={() => this.click('Green')}
                style={{flex: 1, backgroundColor: Color.Green}}
              />
              <TouchableOpacity
                onPress={() => this.click('Dark Green')}
                style={{flex: 1, backgroundColor: Color.Dark_Green}}
              />
            </View>
          </View>
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