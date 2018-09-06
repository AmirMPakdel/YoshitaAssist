import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimeLineScroller from '../components/UI/Timeline/TimelineScroller';
import TimeLineTopActivities from '../components/UI/Timeline/TimeLineTopActivities';
const PersianDate = require('persian-date');
import _ from 'lodash';

const PAST_DAYS = 10;
initDates = () => {
  let dates = [];
  for (let i = -PAST_DAYS; i < 0; i++) {
    dates.push({ score: 0, date: new PersianDate().subtract('days', -i) });
  }

  dates.push({ score: 0, date: new PersianDate() });

  for (let i = 1; i < 32; i++) {
    dates.push({ score: 0, date: new PersianDate().add('days', i) });
  }

  return dates;
};

export default class TimeLine extends React.Component {
  state = {
    dates: initDates(),
    selectedDate: new PersianDate(),
    selectedIndex: PAST_DAYS,
    topActivities: [
      { time: 5, title: 'باشگاه' },
      { time: 32, title: 'دانشگاه' },
      { time: 10, title: 'زایشگاه' }
    ]
  };

  _onSnapHandler = index => {
    this.setState(prevState => ({
      selectedDate: prevState.dates[index].date,
      selectedIndex: index
    }));
  };
  _onEndReachedHandler = () => {
    let lastDate = this.state.dates[this.state.dates.length - 1].date.clone();
    console.log(lastDate);

    const clonedDates = _.cloneDeep(this.state.dates);
    for (i = 0; i < 32; i++) {
      clonedDates.push({
        score: 0,
        date: lastDate.add('days', 1).clone()
      });
    }

    this.setState({ dates: clonedDates });
  };

  componentDidMount() {
    // for (const iterator of this.state.dates) {
    //   console.log(iterator.format('dddd D MMMM YYYY'));
    // }
  }

  render() {
    let message = '';
    if (this.state.selectedIndex === PAST_DAYS) {
      message = 'امروز';
    } else if (this.state.selectedIndex < PAST_DAYS) {
      message = `${PAST_DAYS - this.state.selectedIndex} روز قبل`;
    } else {
      message = `${this.state.selectedIndex - PAST_DAYS} روز بعد`;
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            flexGrow: 1,
            backgroundColor: '#6d0d5d',
            width: '100%',
            justifyContent: 'space-evenly',
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
            {this.state.selectedDate.format('dddd D MMMM YYYY')}
          </Text>
          <Text
            style={{
              fontFamily: 'sahel',
              fontSize: 16,
              color: '#fff'
            }}>
            {message}
          </Text>
          <View style={{ width: '100%', height: 60 }}>
            <TimeLineTopActivities topActivities={this.state.topActivities} />
          </View>
        </View>

        <View style={{ flexGrow: 1, justifyContent: 'center' }}>
          <TimeLineScroller
            activeIndex={PAST_DAYS}
            data={this.state.dates}
            onSnapItem={this._onSnapHandler}
            onEndReached={this._onEndReachedHandler}
          />
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
