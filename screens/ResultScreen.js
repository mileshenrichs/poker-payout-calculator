import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Transaction from '../components/ResultScreen/Transaction';

export default class ResultScreen extends Component {
  static navigationOptions = {
    title: 'Results'
  };

  render() {
    // const payouts = [
    //   {
    //     key: '1',
    //     from: 'Josh',
    //     to: 'Jake',
    //     payout: 2.60
    //   },
    //   {
    //     key: '2',
    //     from: 'Miles',
    //     to: 'Carter',
    //     payout: 0.80
    //   },
    //   {
    //     key: '3',
    //     from: 'Carter',
    //     to: 'Sam',
    //     payout: 10.33
    //   }
    // ];

    const payouts = this.props.navigation.getParam('payouts', []);

    // add keys
    for(let i = 0; i < payouts.length; i++) {
      payouts[i].key = i.toString();
    }

    return (
      <View style={styles.body}>
        <FlatList style={{width: '100%'}}
          data={payouts}
          renderItem={payout => <Transaction {...payout} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    height: '100%',
    alignItems: 'center',
    width: '100%'
  }
});