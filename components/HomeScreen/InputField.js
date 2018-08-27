import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class InputField extends Component {
  render() {
    const customEncompassingViewStyles = {width: this.props.width};
    const { extraLeftPadding } = this.props;
    if(extraLeftPadding) {
      customEncompassingViewStyles.paddingLeft = 10 + extraLeftPadding;
    }

    return (
      <View style={[styles.encompassingView, customEncompassingViewStyles]}>
        <Ionicons style={styles.icon} name={this.props.iconName} size={24} color="rgba(0, 0, 0, 0.2)" />
        <TextInput style={styles.textInput}
          placeholder={this.props.placeholder}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          onChangeText={(text) => this.props.onChange(text)}
          value={this.props.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  encompassingView: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 4,
    paddingLeft: 10,
    flexDirection: 'row',
    marginBottom: 14
  },
  icon: {
    marginRight: 12
  },
  textInput: {
    flex: 1
  }
});