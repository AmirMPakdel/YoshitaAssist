import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import TabNavigation from './src/navigation/TabNavigation';
import RealmDB from './src/database/RealmDB';
export default class App extends Component{

  constructor(props){
    super(props);

    // initializing the realm database
    RealmDB.init();


  }

  render() {
    return (
      
      <View style={{flex:1, backgroundColor: '#f8f8f8'}}>
      <StatusBar animated={true} barStyle="dark-content" hidden = {true}/>
      <TabNavigation>

      </TabNavigation>
      </View>
    );
  }
}

