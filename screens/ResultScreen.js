import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class ResultScreen extends Component {
  static navigationOptions = {
    title: 'Results'
  };

  componentDidMount() {
    console.log(this.props.navigation.getParam('payouts', []));
  }

  render() {
    return (
      <View>
        <Text>Here are your results!</Text>
      </View>
    )
  }
}