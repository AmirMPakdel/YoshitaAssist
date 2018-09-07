import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Dimensions } from 'react-native';
import TabNavigation from './src/navigation/TabNavigation';
import RealmDB from './src/database/RealmDB';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class App extends Component {
  constructor(props) {
    super(props);

    // initializing the realm database
    RealmDB.init();
  }

  render() {
    return (
    
  
      <KeyboardAvoidingView behavior="height" enabled
       style={{ height:Height, width:Width, minHeight:Height, backgroundColor: '#f8f8f8' }}>
        <StatusBar
          animated={true}
          barStyle="default"
          backgroundColor="rgba(189, 241, 136, 0)"
          hidden={false}
          translucent={true}
        />

        <TabNavigation />
      </KeyboardAvoidingView>
      
    );
  }
}
