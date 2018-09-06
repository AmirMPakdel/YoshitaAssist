import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Colors';
import EventSubmit from '../components/EventSubmit';


export default class Map extends React.Component{

    render(){

        return(
            <View style={styles.container}>

            <EventSubmit/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: Colors.Whitebackground,
    },
  
  });