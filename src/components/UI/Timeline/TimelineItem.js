import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../Colors';
import { convertToPersianNumber } from '../../../data/PickersList';

/**
 * props:
 *          score(Number): how much busy user is( from 0 to 3 )
 *          dayNumber(Number): ...
 */

export default class TimeLineItem extends Component {
  render() {
    const dayColor =
      Colors[`workHeat_${this.props.score <= 3 ? this.props.score : 0}`];
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
          {convertToPersianNumber(this.props.dayNumber)}
        </Text>
      </View>
    );
  }
}
