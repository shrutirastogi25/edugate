/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Color from '../Utils/Color';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  onClickListener = viewId => {
    if (viewId === 'profilescreen') {
      this.props.navigation.dispatch(StackActions.replace('ProfileScreen'));
    } else if (viewId === 'homescreen') {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    } else if (viewId === 'login') {
      this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
    } else if (viewId === 'reset') {
      this.props.navigation.dispatch(StackActions.replace('ResetPassword'));
    }
  };

  render() {
    return (
      <View style={{flex: 10}}>
        <View style={{flex: 6, padding: 10, flexDirection: 'row'}}>
          <Image
            source={require('../Assets/profile.png')}
            style={{height: 200, width: 200}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Shruti Rastogi</Text>
        </View>
        <View style={{flex: 3, alignItems: 'center'}}>
          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener('reset')}>
            <Text>Change Password</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.Button]}
            onPress={() =>
              Alert.alert(
                'Logout',
                'Do you really want to logout?',
                [
                  {
                    text: 'Yes',
                    onPress: () => this.onClickListener('login'),
                  },
                  {
                    text: 'No',
                    onPress: () => this.onClickListener('profilescreen'),
                    style: 'cancel',
                  },
                ],
                {cancelable: false},
              )
            }>
            <Text style={styles.Text}>Logout</Text>
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
  Button: {
    backgroundColor: Color.Orange,
  },
  Text: {
    color: 'white',
  },
});
