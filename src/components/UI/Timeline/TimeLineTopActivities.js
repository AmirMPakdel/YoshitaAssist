import React from 'react';
import { convertToPersianNumber } from '../../../data/PickersList';
import { View, StyleSheet, Text } from 'react-native';
import { Wrapper } from '../../../HOC/Wrapper';

/**
 * props:
 * topActivities: [{time: 5, title: باشگاه}]
 */

export default class TimeLineTopActivities extends React.Component {
  state = {
    topActivities: this.props.topActivities
  };
  render() {
    let topActivities = this.state.topActivities.map((activity, index) => (
      <Wrapper key={activity.title + activity.time}>
        <View style={styles.tab}>
          <Text style={styles.number}>
            {convertToPersianNumber(activity.time)}
          </Text>
          <Text style={styles.title}>{activity.title}</Text>
        </View>
        {index !== this.state.topActivities.length - 1 && (
          <View style={styles.line} />
        )}
      </Wrapper>
    ));

    return <View style={styles.container}>{topActivities}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tab: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    paddingBottom: 10,
    justifyContent: 'center'
  },

  number: {
    fontSize: 18,
    color: '#75ccff',
    fontFamily: 'sahel'
  },

  title: {
    fontSize: 13,
    color: '#FFFFFF',
    fontFamily: 'sahel'
  },

  line: {
    height: '100%',
    width: '0.6%',
    opacity: 0.3,
    borderRadius: 100,
    backgroundColor: 'white'
  }
});
