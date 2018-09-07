import React, { Component } from 'react';
import { View, Animated, Dimensions, Text, ScrollView } from 'react-native';
import ActivityItem from './ActivityItem';

export default class Activities extends Component {
  state = {};

  render() {
    return (
      <ScrollView>
        {this.props.events
          ? this.props.events.map((e, i) => (
              <ActivityItem
                key={e.eventType + i}
                type={e.eventType}
                startTime={e.eventTimeRange.start}
                endTime={e.eventTimeRange.end}
                description={e.eventDescription}
                title={e.eventTitle}
              />
            ))
          : null}
      </ScrollView>
    );
  }
}
