import React, { Component } from 'react';
import { View, Animated, Dimensions, Text, ScrollView } from 'react-native';
import { convertToPersianNumber } from '../../../../data/PickersList';
import { minuteToTime } from '../../../../data/DistanceDate';

export default class FreeTime extends Component {
  render() {
    let height = this.props.minute * 0.6;
    if (height < 40) {
      height = 70;
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
      )}  دقیه وقت آزاد داری برا این کار`;
    }

    let messageText = '';
    if (this.props.minute < 30) {
      messageText = 'وقتت برای گوش دادن به یه موسیقی آرام بخش عالیه.';
    } else {
      messageText =
        ' میدونم کلی خسته شدی، یه دوش آب گرم بعد از ورزش حسابی مچسبه.\n سعی کن با آرامش و بدون استرس باشی چون تا چند ساعت دیگه کاری نداری';
    }
    const messageView = (
      <View
        style={{
          margin: 20,
          padding: 5,
          width: '80%',
          height: '100%',
          borderRadius: 10,
          borderWidth: 1
        }}>
        <Text style={{ fontSize: 16, color: '#6d0d5d' }}>{messageText}</Text>
        <Text>{time}</Text>
      </View>
    );

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
            height: '100%',
            backgroundColor: 'red'
          }}
        />
        {messageView}
        {/* <Text style={{ marginRight: 10 }}>{time}</Text> */}
      </View>
    );
  }
}
