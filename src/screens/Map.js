import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../Colors';
import ActivityItem from '../components/UI/Timeline/Activities/ActivityItem';

export default class Map extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Whitebackground
  }
});
