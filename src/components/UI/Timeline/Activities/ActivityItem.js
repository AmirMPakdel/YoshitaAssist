import React, { Component } from 'react';
import { View, Animated, Dimensions, Text, Image } from 'react-native';
import { convertToPersianNumber } from '../../../../data/PickersList';

/**
 * props:
 *  startTime, endTime, title, description, type
 */
export default class ActivityItem extends Component {
  state = {};

  render() {
    let imageSource = null;
    let bgColor = null;
    switch (this.props.type) {
      case 'email':
        imageSource = require('../../../../assets/icons/email.png');
        bgColor = '#D32F2F';
        break;
      case 'university':
        imageSource = require('../../../../assets/icons/hat.png');
        bgColor = '#0097A7';
        break;
      case 'meeting':
        imageSource = require('../../../../assets/icons/hands.png');
        bgColor = '#388E3C';
        break;
      case 'gym':
        imageSource = require('../../../../assets/icons/arm.png');
        bgColor = '#AFB42B';
        break;
      case 'party':
        imageSource = require('../../../../assets/icons/drink.png');
        bgColor = '#7B1FA2';
        break;
      case 'doctor':
        imageSource = require('../../../../assets/icons/medic.png');
        bgColor = '#00796B';
        break;

      default:
        break;
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10
        }}>
        <View
          style={{
            // flexGrow: 1,
            height: 80,
            padding: 10,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 40,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            width: '80%'
          }}>
          {/* the start and finish time  */}
          <View
            style={{
              justifyContent: 'space-around',
              marginRight: 5,
              height: '100%'
            }}>
            <Text style={{ fontSize: 28, color: 'rgb(98,37,88)' }}>
              {convertToPersianNumber(
                `${this.props.startTime.hour()}:${this.props.startTime.minute()}`
              )}
            </Text>

            {this.props.endTime ? (
              <Text style={{ fontSize: 28, color: 'rgb(98,37,88)' }}>
                {convertToPersianNumber(
                  `${this.props.endTime.hour()}:${this.props.endTime.minute()}`
                )}
              </Text>
            ) : null}
          </View>
          {/* verical line */}
          <View
            style={{
              width: 2,
              height: '120%',
              backgroundColor: 'rgb(98,37,88)',
              marginHorizontal: 15
            }}
          />
          <View style={{ justifyContent: 'flex-start', padding: 3 }}>
            <Text
              numberOfLines={2}
              lineBreakMode="tail"
              style={{
                maxWidth: 200,
                fontSize: 18,
                color: 'rgb(98,37,88)',
                fontWeight: 'bold'
              }}>
              {this.props.title}
            </Text>
            <Text
              numberOfLines={2}
              lineBreakMode="clip"
              style={{ fontSize: 14, color: 'rgb(98,37,88)', maxWidth: 200 }}>
              {this.props.description}
            </Text>
          </View>
        </View>

        {/* the image circle */}
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            backgroundColor: bgColor
          }}>
          <Image
            source={imageSource}
            style={{
              width: '90%',
              height: '90%',
              resizeMode: 'cover'
            }}
          />
        </View>
      </View>
    );
  }
}
