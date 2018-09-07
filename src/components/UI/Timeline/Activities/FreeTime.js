import React, { Component } from 'react';
import { View, Animated, Dimensions, Text, ScrollView } from 'react-native';
import { convertToPersianNumber } from '../../../../data/PickersList';

export default class FreeTime extends Component {
  render() {
    const height = this.props.minute * 0.7;
    const h = parseInt(this.props.minute / 60);
    const m = parseInt(this.props.minute % 60);
    let time = '';

    if (h == 0 && m == 0) {
      time = '';
    } else if (h == 0 && m > 0) {
      time = `${convertToPersianNumber(m)} دقیقه وقت آزاد داری`;
    } else if (h > 0 && m > 0) {
      time = `${convertToPersianNumber(h)} ساعت و ${convertToPersianNumber(
        m
      )} دقیه وقت آزاد داری`;
    }

    return (
      <View
        style={{
          width: '100%',
          height: height,
          minHeight: 40,
          flexDirection: 'row-reverse',
          alignItems: 'center'
        }}>
        {/* red circle */}
        <View
          style={{
            top: height / 2 - 10,
            left: 32,
            position: 'absolute',
            width: 20,
            height: 20,
            backgroundColor: 'red',
            borderRadius: 10
          }}
        />
        <View
          style={{
            marginRight: 40,
            width: 4,
            borderRadius: 10,
            height: height,
            backgroundColor: 'red'
          }}
        />
        <Text style={{ marginRight: 10 }}>{time}</Text>
      </View>
    );
  }
}
