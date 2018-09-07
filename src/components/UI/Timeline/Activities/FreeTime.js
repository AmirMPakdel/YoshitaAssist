import React, { Component } from 'react';
import { View, Animated, Dimensions, Text, ScrollView } from 'react-native';
import { convertToPersianNumber } from '../../../../data/PickersList';
import { minuteToTime } from '../../../../data/DistanceDate';

export default class FreeTime extends Component {
  render() {
    let height = this.props.minute * 0.7;
    if (height < 40) {
      height = 40;
    }
    const { hour, minute } = minuteToTime(this.props.minute);
    let time = '';

    if (hour == 0 && minute == 0) {
      time = '';
    } else if (hour == 0 && minute > 0) {
      time = `${convertToPersianNumber(minute)} دقیقه وقت آزاد داری`;
    } else if (hour > 0 && minute > 0) {
      time = `${convertToPersianNumber(hour)} ساعت و ${convertToPersianNumber(
        minute
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
