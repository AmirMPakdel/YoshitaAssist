import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimeLineScroller from '../components/UI/Timeline/TimelineScroller';
import TimeLineTopActivities from '../components/UI/Timeline/TimeLineTopActivities';
const persianDate = require('persian-date');

export default class TimeLine extends React.Component {
  state = {
    currentDate: new persianDate().format('dddd D MMMM YYYY'),
    topActivities: [
      { time: 5, title: 'باشگاه' },
      { time: 32, title: 'باشگاه' },
      { time: 10, title: 'باشگاه' }
    ]
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
            flexGrow: 1,
            backgroundColor: '#6d0d5d',
            width: '100%',
            justifyContent:'space-evenly',
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

              fontSize: 16,
              color: '#fff'
            }}>
            امروز
          </Text>
          <View style={{ width: '100%', height: 60 }}>
            <TimeLineTopActivities topActivities={this.state.topActivities} />
          </View>
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
