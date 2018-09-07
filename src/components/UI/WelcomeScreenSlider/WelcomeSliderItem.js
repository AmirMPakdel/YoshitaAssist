import React from 'react';
import { View, Text } from 'react-native';

export default props => (
  <View style={{}}>
    <Text style={{ fontSize: 20, fontFamily: 'sahel', color: '#fff' }}>
      {props.text}
    </Text>
  </View>
);
