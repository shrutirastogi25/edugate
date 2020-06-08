/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
//import Color from '../Utils/Color';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({align: 'flex-start'}, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000,
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.moveToNextScreen();
    }, 5000);
  }
  moveToNextScreen = () => {
    this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
  };

  /*  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Color.White,
        }}>
        <StatusBar
          backgroundColor={Color.App_Background}
          barStyle="dark-content"
        />
        <Text>hello</Text>
      </View>
    );
  }
}
 */

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#616161'}}>
        <View
          style={{
            flex: 4,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: this.state.align,
            marginHorizontal: 100,
          }}>
          <Text style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
            e
          </Text>
          {!this.state.alignsecond ? null : (
            <View>
              <Text
                style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
                d
              </Text>
            </View>
          )}
          {!this.state.alignsecond ? null : (
            <View>
              <Text
                style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
                u
              </Text>
            </View>
          )}
          {!this.state.alignsecond ? null : (
            <View>
              <Text
                style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
                g
              </Text>
            </View>
          )}
          {!this.state.alignsecond ? null : (
            <View>
              <Text
                style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
                a
              </Text>
            </View>
          )}
          {!this.state.alignsecond ? null : (
            <View>
              <Text
                style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
                t
              </Text>
            </View>
          )}
          {!this.state.alignsecond ? null : (
            <View>
              <Text
                style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
                e
              </Text>
            </View>
          )}
          {!this.state.alignsecond ? null : (
            <View>
              <Text
                style={{color: '#F57F17', fontSize: 50, fontWeight: 'bold'}}>
                d
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
