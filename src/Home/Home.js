/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Color from '../Utils/Color';

export default class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  onClickListener = viewId => {
    if (viewId === 'profilescreen') {
      this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    } else if (viewId === 'homescreen') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    } else if (viewId === 'start') {
      Alert.alert('this is the alert for starting');
    } else if (viewId === 'join') {
      Alert.alert('this is the alert for joining');
    }
  };

  render() {
    return (
      <View style={{flex: 10}}>
        <View style={styles.container}>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.Button]}
            onPress={() => this.onClickListener('start')}>
            <Text style={styles.Text}>Start a meeting</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.Button]}
            onPress={() => this.onClickListener('join')}>
            <Text style={styles.Text}>Join a meeting</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Color.Gray,
            }}
            onPress={() => this.onClickListener('homescreen')}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../Assets/conference.png')}
            />
            <Text style={styles.Text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Color.Gray,
            }}
            onPress={() => this.onClickListener('profilescreen')}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../Assets/profile.png')}
            />
            <Text style={styles.Text}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
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
  Button: {
    backgroundColor: '#F57F17',
  },
  Text: {
    color: 'white',
  },
});
