import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Transaction extends Component {
  render() {
    console.log(this.props);
    const { from, to, payout } = this.props.item;

    return (
      <View style={styles.item}>
        <Text style={styles.loser}>{from}</Text>
        <Text> should pay </Text>
        <Text style={styles.winner}>{to}</Text>
        <Text style={styles.payout}> ${payout}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    width: '100%'
  },
  loser: {
    fontWeight: 'bold',
    color: 'red'
  },
  winner: {
    fontWeight: 'bold',
    color: 'green'
  },
  payout: {
    fontWeight: 'bold'
  }
});