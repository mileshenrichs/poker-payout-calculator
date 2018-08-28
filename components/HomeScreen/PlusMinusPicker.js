import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class PlusMinusPicker extends Component {
  render() {
    const resultBlockStyle = {backgroundColor: this.props.isWinner ? '#33c144' : '#c22f2f'}

    if(this.props.isWinner === undefined) {
      return (
        <View style={styles.root}>
          <TouchableHighlight style={styles.plusTouchHighlight}
            activeOpacity={0.8} 
            onPress={() => this.props.onSelectionMade(true)}>
            <View style={[styles.plusMinusButton, styles.plusButton]}>
              <Text style={[styles.buttonText, styles.plusButtonText]}>+ $$</Text>
            </View>
          </TouchableHighlight>
  
          <TouchableHighlight style={styles.minusTouchHighlight}
            activeOpacity={0.8} 
            onPress={() => this.props.onSelectionMade(false)}>
            <View style={[styles.plusMinusButton, styles.minusButton]}>
              <Text style={[styles.buttonText, styles.minusButtonText]}>- $$</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View style={styles.root}>
          <TouchableHighlight style={styles.resultTouchHighlight}
            activeOpacity={0.8} 
            onPress={() => this.props.onClearSelection()}>
            <View style={[styles.resultBlock, resultBlockStyle]}>
              <Ionicons style={styles.checkIcon} name="ios-checkmark" size={120} color="white" />
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  root: {
    width: 110,
    height: '100%',
    marginRight: 12
  },
  plusTouchHighlight: {
    borderTopLeftRadius: 8
  },
  plusMinusButton: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusButton: {
    backgroundColor: '#33c144',
    borderTopLeftRadius: 8
  },
  minusButton: {
    backgroundColor: '#c22f2f',
    borderBottomLeftRadius: 8
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 36
  },
  plusButtonText: {
    color: '#8dff93'
  },
  minusTouchHighlight: {
    borderBottomLeftRadius: 8
  },
  minusButtonText: {
    color: '#ff8686'
  },
  resultBlock: {
    height: 108,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  checkIcon: {
    bottom: 8
  },
  resultTouchHighlight: {
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 0
  }
});