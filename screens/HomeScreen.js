import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Button } from 'react-native';
import PlayerCard from '../components/HomeScreen/PlayerCard';
import { calculatePayouts } from '../util/payoutCalculation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Enter Game Results'
  };

  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  blankPlayer = () => ({
    id: this.state.players.length,
    name: '',
    isWinner: undefined,
    moneyDifference: undefined
  })

  componentDidMount() {
    this.setState({
      players: [this.blankPlayer()]
    });
  }

  savePlayer(player) {
    const playerInState = this.state.players.find(playerCard => playerCard.id === player.id);
    const playerIndex = this.state.players.indexOf(playerInState);

    this.setState(prevState => ({
      players: [
        ...prevState.players.slice(0, playerIndex),
        player,
        ...prevState.players.slice(playerIndex + 1)
      ]
    }));
  }

  addPlayer() {
    this.setState(prevState => ({
      players: [
        ...prevState.players,
        this.blankPlayer()
      ]
    }));
  }

  calculatePayouts() {
    const payouts = calculatePayouts(this.state.players);
    this.props.navigation.navigate('Result', {payouts});
  }

  render() {
    return (
      <View style={styles.body}>
        {this.state.players.map(player => (
          <PlayerCard 
            {...player} 
            key={player.id} 
            savePlayer={this.savePlayer.bind(this)} />
        ))}

        <View style={styles.addPlayerButton}>
          <Button style={styles.addPlayerButton} 
            title="+ Add Player"
            onPress={this.addPlayer.bind(this)} 
          />
        </View>

        <TouchableHighlight style={styles.calculateButton}
          activeOpacity={0.8}
          onPress={this.calculatePayouts.bind(this)}>
          <View>
            <Text style={styles.calculateBtnText}>Calculate Payouts</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    height: '100%',
    alignItems: 'center',
    paddingTop: 24
  },
  addPlayerButton: {
    marginTop: 18,
    marginBottom: 18
  },
  calculateButton: {
    backgroundColor: '#15BF06',
    width: '94%',
    height: 65,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  calculateBtnText: {
    color: 'white',
    fontSize: 20
  }
});