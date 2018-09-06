import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TimeLineItem from './TimelineItem';
import _ from 'lodash';

const VIEWPORT_WIDHT = Dimensions.get('window').width;

/**
 * props:
 *        data: array of objetcs like this => [{ score: 0, dayNumber: 15 }, ... ]
 *
 */
export default class TimeLineScroller extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = { data: props.data };
  }

  _onSnapToItemHandler = index => {
    // console.log(this.state);
  };
  _renderItem = ({ item, index }) => {
    return <TimeLineItem score={item.score} dayNumber={item.dayNumber} />;
  };
  _onEndReached = info => {
    console.log(info);
    //todo : add the logic for appending the new dates comming from local database
  };

  componentDidMount() {}
  render() {
    return (
      <View style={{ width: VIEWPORT_WIDHT, height: 80 }}>
        <Carousel
          activeAnimationType="spring"
          ref={c => (this.carousel = c)}
          onSnapToItem={this._onSnapToItemHandler}
          snapToAlignment="start"
          centerContent={true}
          data={this.state.data}
          renderItem={this._renderItem}
          sliderWidth={VIEWPORT_WIDHT}
          sliderHeight={80}
          itemWidth={70}
          itemHeight={80}
          inactiveSlideOpacity={0.3}
          inactiveSlideScale={0.2}
          decelerationRate={3}
          firstItem={this.state.activeIndex ? this.state.activeIndex : 0}
          // the logic behind the filling the time line with new values
          onEndReachedThreshold={0.5}
          onEndReached={this._onEndReached}
        />
      </View>
    );
  }
}
