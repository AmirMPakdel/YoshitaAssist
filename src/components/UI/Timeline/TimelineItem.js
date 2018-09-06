import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../Colors';

/**
 * props:
 *          score(Number): how much busy user is( from 0 to 4 )
 *          dayNumber(Number): ...
 */

const mapPersianNumber = [
  '۰',
  '۱',
  '۲',
  '۳',
  '۴',
  '۵',
  '۶',
  '۷',
  '۸',
  '۹',
  '۱۰',
  '۱۱',
  '۱۲',
  '۱۳',
  '۱۴',
  '۱۵',
  '۱۶',
  '۱۷',
  '۱۸',
  '۱۹',
  '۲۰',
  '۲۱',
  '۲۲',
  '۲۳',
  '۲۴',
  '۲۵',
  '۲۶',
  '۲۷',
  '۲۸',
  '۲۸',
  '۳۰',
  '۳۱'
];
export default class TimeLineItem extends Component {
  render() {
    const dayColor = Colors[`workHeat_${this.props.score}`];
    return (
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 50,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: dayColor
        }}>
        <Text
          style={[
            {
              fontSize: 32,
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'IRANSANS_MEDIUM'
            }
          ]}>
          {this.props.activeIndex == this.props.index &&
            mapPersianNumber[+this.props.dayNumber]}
        </Text>
      </View>
    );
  }
}
