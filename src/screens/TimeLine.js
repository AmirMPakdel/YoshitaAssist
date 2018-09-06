import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimeLineScroller from '../components/UI/Timeline/TimelineScroller';
const persianDate = require('persian-date');

export default class TimeLine extends React.Component {
  state = {
    currentDate: new persianDate().format('dddd D MMMM YYYY')
  };
  data = [
    { score: 0, dayNumber: 1 },
    { score: 2, dayNumber: 16 },
    { score: 3, dayNumber: 17 },
    { score: 4, dayNumber: 18 },
    { score: 0, dayNumber: 19 },
    { score: 2, dayNumber: 20 },
    { score: 4, dayNumber: 21 },
    { score: 1, dayNumber: 22 },
    { score: 0, dayNumber: 23 },
    { score: 2, dayNumber: 24 },
    { score: 3, dayNumber: 25 },
    { score: 1, dayNumber: 9 }
  ];

  render() {
    // console.log(new persianDate().format('ddd D MMMM YYY'));

    return (
      <View style={styles.container}>
        <View
          style={{
            flexGrow: 4,
            backgroundColor: '#6d0d5d',
            width: '100%',
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'sahel',
              padding: 5,
              fontSize: 20,
              marginTop: 20,
              color: '#fff'
            }}>
            {this.state.currentDate}
          </Text>
          <Text
            style={{
              fontFamily: 'sahel',
              padding: 5,
              fontSize: 16,
              color: '#fff'
            }}>
            امروز
          </Text>
        </View>

        <View style={{ flexGrow: 1, justifyContent: 'center' }}>
          <TimeLineScroller activeIndex={3} data={this.data} />
        </View>
        <View style={{ flexGrow: 8, backgroundColor: '#eee', width: '100%' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
