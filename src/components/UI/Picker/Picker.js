import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

/**
 * (NOTE props marked with # are required):
 *    #data        : array of objects like this => [{key: 'shahrivar', value: 'شهریور' }, ...]
 *    #width       : widht of the picker
 *    #itemHeight  : height of the each item
 *    #onSnapToItem: function which has a these arguments => fucntion(item, index). note item is a single object in the data array
 *    itemContainerStyle : style of the each item container
 *    itemTextStyle : style of the textItem
 *    pickerStyle : style of the picker container
 *    firstIndex  : starting point of the picker
 */

export default class Picker extends Component {
  _renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          },
          this.props.itemContainerStyle
        ]}>
        <Text
          style={[
            { fontSize: 16},
            this.props.itemTextStyle
          ]}>
          {item.value}
        </Text>
      </View>
    );
  };

  _onScrollEnd = dd => {
    console.log('END', dd);
  };

  _onSnapToItemHandler = index => {
    if (this.props.onSnapToItem) {
      this.props.onSnapToItem(this.props.data[index], index);
    }
  };

  componentDidMount() {
    const index = this.props.firstIndex ? this.props.firstIndex : 0;
    this.props.onSnapToItem(this.props.data[index], index);
  }

  render() {
    const height = this.props.itemHeight * 3;

    return (
      <View
        style={[
          {
            width: this.props.width,
            height: height,
            borderColor: '#e2e2e2',
            borderWidth: 1.8,
            borderRadius: this.props.borderRadius || 15
          },
          this.props.pickerStyle
        ]}>
        <Carousel
          activeAnimationType="spring"
          firstItem={this.props.firstIndex ? this.props.firstIndex : 0}
          ref={c => (this.carousel = c)}
          onSnapToItem={this._onSnapToItemHandler}
          snapToAlignment="start"
          centerContent={true}
          data={this.props.data}
          vertical={true}
          renderItem={this._renderItem}
          sliderHeight={height}
          sliderWidth={this.props.width}
          itemHeight={this.props.itemHeight}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.6}
          decelerationRate={3}
        />
      </View>
    );
  }
}
