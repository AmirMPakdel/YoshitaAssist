import React, { Component } from 'react';
import { View, Animated, Dimensions, Text, ScrollView } from 'react-native';
import ActivityItem from './ActivityItem';
import FreeTime from './FreeTime';
import { Wrapper } from '../../../../HOC/Wrapper';
import { dateDistanceToMinute } from '../../../../data/DistanceDate';

export default class Activities extends Component {
  state = {};

  render() {
    let activities = [];
    if (this.props.events) {
      for (let i = 0; i < this.props.events.length; i++) {
        const e = this.props.events[i];
        activities.push(
          <ActivityItem
            key={e.eventType + i}
            type={e.eventType}
            startTime={e.eventTimeRange.start}
            endTime={e.eventTimeRange.end}
            description={e.eventDescription}
            title={e.eventTitle}
          />
        );

        if (i + 1 !== this.props.events.length) {
          const nextEvent = this.props.events[i + 1];
          //calc the free time between
          let timeA = e.eventTimeRange.end;
          let timeB = nextEvent.eventTimeRange.start;

          const deltaTime = dateDistanceToMinute(timeA, timeB);

          activities.push(
            <FreeTime key={e.eventType + i + deltaTime} minute={deltaTime} />
          );
        }
      }
    }

    return <Wrapper>{activities}</Wrapper>;
  }
}
