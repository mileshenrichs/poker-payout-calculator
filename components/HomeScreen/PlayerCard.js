import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PlusMinusPicker from './PlusMinusPicker';
import InputField from './InputField';

export default class PlayerCard extends Component {

  handleWinnerStatusChanged(newStatus) {
    const player = this.buildCurrentPlayerObject();
    player.isWinner = newStatus;
    this.props.savePlayer(player);
  }

  handlePlayerNameChanged(newName) {
    const player = this.buildCurrentPlayerObject();
    player.name = newName;
    this.props.savePlayer(player);
  }

  handleMoneyDifferenceChanged(newMoney) {
    const player = this.buildCurrentPlayerObject();
    player.moneyDifference = newMoney;
    this.props.savePlayer(player);
  }

  buildCurrentPlayerObject() {
    return {
      id: this.props.id,
      name: this.props.name,
      isWinner: this.props.isWinner,
      moneyDifference: this.props.moneyDifference
    }
  }

  render() {
    const playerCardStyle = {};
    if(this.props.isWinner !== undefined) {
      if(!this.props.isWinner) {
        playerCardStyle.borderColor = '#c22f2f';
      } else {
        playerCardStyle.borderColor = '#33c144';
      }
    }

    return (
      <View style={[styles.playerCard, playerCardStyle]}>
        <PlusMinusPicker 
          isWinner={this.props.isWinner}
          onSelectionMade={(isWinner) => this.handleWinnerStatusChanged(isWinner)}
          onClearSelection={() => this.handleWinnerStatusChanged(undefined)}
        />
        <View style={styles.inputSection}>
          <InputField 
            placeholder="Player Name"
            width="90%"
            iconName="md-person"
            text={this.props.name}
            onChange={(text) => this.handlePlayerNameChanged(text)}
          />

          <InputField 
            placeholder="0.00"
            width="50%"
            iconName="logo-usd"
            extraLeftPadding={2}
            text={this.props.moneyDifference ? this.props.moneyDifference.toString() : ''}
            onChange={(text) => {
              const moneyAmount = parseFloat(text);
              this.handleMoneyDifferenceChanged(moneyAmount);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerCard: {
    height: 110,
    backgroundColor: '#fcfcfc',
    borderRadius: 8,
    width: '94%',
    borderWidth: 1,
    borderColor: '#a4a4a4',
    flexDirection: 'row',
    marginBottom: 18
  },
  inputSection: {
    flex: 1,
    paddingTop: 12
  }
});