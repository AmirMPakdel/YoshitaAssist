import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TabNavigation from './src/navigation/TabNavigation';
import RealmDB from './src/database/RealmDB';
export default class App extends Component {
  constructor(props) {
    super(props);

    // initializing the realm database
    RealmDB.init();
  }

  render() {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
        <StatusBar
          animated={true}
          barStyle="default"
          backgroundColor="rgba(189, 241, 136, 0)"
          hidden={false}
          translucent={true}
        />
=======
      
      <View style={{flex:1, backgroundColor: '#f8f8f8'}}>
      <StatusBar animated={true} barStyle="default" hidden = {false}/>
      <TabNavigation>
>>>>>>> ff2e18e3df52c1845507ec8df84a7038650b32c6

        <TabNavigation />
      </View>
    );
  }
}
