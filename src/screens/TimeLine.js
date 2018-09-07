import React from 'react';
import { StyleSheet, View,Image,TouchableOpacity, Text, ScrollView } from 'react-native';
import TimeLineScroller from '../components/UI/Timeline/TimelineScroller';
import TimeLineTopActivities from '../components/UI/Timeline/TimeLineTopActivities';
const PersianDate = require('persian-date');
import { connect } from 'react-redux';
import _ from 'lodash';
import Activities from '../components/UI/Timeline/Activities/Activities';

const PAST_DAYS = 10;

calculateScore = events => {
  let totalActivityTimeMinute = 0;
  for (const event of events) {
    totalActivityTimeMinute += +event.eventDuration;
  }

  if (totalActivityTimeMinute == 0) {
    return 0;
  } else if (totalActivityTimeMinute <= 300) {
    return 1;
  } else if (totalActivityTimeMinute <= 480) {
    return 2;
  } else {
    return 3;
  }
};

class TimeLine extends React.Component {
  // this will fetch th events for a given date and will return a object with Score and Sorted Events
  _processDateFromDatabase = pDate => {
    //generate the key to fetch the corresponding events
    //fetch the events from the mockdatabase provided by redux
    const key = new PersianDate([
      pDate.year(),
      pDate.month(),
      pDate.date(),
      0,
      0,
      0,
      0
    ]).unix();
    const fetchedEvents = this.props.events[key];
    if (fetchedEvents) {
      const score = calculateScore(fetchedEvents);
      const sortedEvents = _.sortBy(fetchedEvents, e =>
        e.eventTimeRange.start.unix()
      );

      return {
        score: score,
        date: pDate,
        events: sortedEvents
      };
    } else {
      // if ther is no saved event, return immidiatly
      return {
        score: 0,
        date: pDate,
        events: []
      };
    }
  };

  initDates = () => {
    let dates = [];
    for (let i = -PAST_DAYS; i < 0; i++) {
      dates.push(
        this._processDateFromDatabase(new PersianDate().subtract('days', -i))
      );
    }
    dates.push(this._processDateFromDatabase(new PersianDate()));
    for (let i = 1; i < 64; i++) {
      dates.push(
        this._processDateFromDatabase(new PersianDate().add('days', i))
      );
    }
    return dates;
  };

  state = {
    dates: this.initDates(),
    selectedDate: new PersianDate(),
    selectedIndex: PAST_DAYS,
    topActivities: [
      { time: 5, title: 'باشگاه' },
      { time: 32, title: 'دانشگاه' },
      { time: 10, title: 'زایشگاه' }
    ]
  };

  _onSnapHandler = index => {
    this.setState({
      selectedDate: this.state.dates[index].date,
      selectedIndex: index
    });
  };

  // really dont know why this doesn't work !!!!
  _onEndReachedHandler = () => {};

  componentDidUpdate() {}
  componentDidMount() {}

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
            height: 160,
            backgroundColor: '#6d0d5d',
            width: '100%',

            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>

          <TouchableOpacity style={{position:'absolute', top:30, left:10}} onPress={()=>{this.props.navigation.goBack()}}>
          <Image style={{width:32, height:32}}
          source={require('../assets/images/back.png')}/>
          </TouchableOpacity>

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
          {/* <View style={{ width: '100%', height: 60 }}>
            <TimeLineTopActivities topActivities={this.state.topActivities} />
          </View> */}
        </View>

        <View style={{ height: 90, justifyContent: 'center' }}>
          <TimeLineScroller
            activeIndex={PAST_DAYS}
            data={this.state.dates}
            onSnapItem={this._onSnapHandler}
            onEndReached={this._onEndReachedHandler}
          />
        </View>
        <ScrollView>
          <View
            style={{
              height: '100%',
              width: '100%',
              paddingHorizontal: 5,
              paddingTop: 15
            }}>
            <Activities
              events={this.state.dates[this.state.selectedIndex].events}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#c9c8c8'
  }
});

const mapStateToProps = newState => ({
  events: newState.mockReducer
});

export default connect(
  mapStateToProps,
  null
)(TimeLine);
