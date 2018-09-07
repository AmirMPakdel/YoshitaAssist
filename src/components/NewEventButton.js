import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../Colors';

export default class NewEventButton extends React.Component {
  render() {
    let styles = null;

    if (this.props.theme === 'fill') {
      styles = StyleSheet.create({
        container: {
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 2,
          borderRadius: 40,
          backgroundColor: this.props.backgroundColor || Colors.m_perpel
        },

        text: {
          fontFamily: 'sahel',
          fontSize: 18,
          color: '#FFFFFF'
        }
      });
    } else {
      styles = StyleSheet.create({
        container: {
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 2,
          borderRadius: 40,
          borderColor: Colors.m_perpel,
          borderWidth: 1.8
        },

        text: {
          fontFamily: 'sahel',
          fontSize: 18,
          color: Colors.m_perpel
        }
      });
    }

    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onpress}>
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
