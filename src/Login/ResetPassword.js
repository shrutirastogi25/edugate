/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {StackActions} from '@react-navigation/native';
const friends = [
  {name: 'Friend1', age: '23'},
  {name: 'Friend2', age: '24'},
  {name: 'Friend3', age: '21'},
  {name: 'Friend4', age: '29'},
  {name: 'Friend5', age: '27'},
  {name: 'Friend6', age: '26'},
  {name: 'Friend7', age: '25'},
  {name: 'Friend8', age: '20'},
];
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
      <View>
        <FlatList
          style={{}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          keyExtractor={friends => friends.name}
          data={friends}
          renderItem={({item}) => {
            return (
              <Text style={{fontSize: 50}}>
                {item.name} - {item.age}
              </Text>
            );
          }}
        />
      </View>
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:Color.White }}>

      //     <TouchableOpacity onPress={() => this.onClickListener('back')}>
      //     <Text>Reset Password Screen</Text>
      //     </TouchableOpacity>
      // </View>
    );
  }
}
