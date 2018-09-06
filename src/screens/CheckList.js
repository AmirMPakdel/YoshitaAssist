import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Colors';
export default class CheckList extends React.Component{

    render(){

        return(
            <View style={styles.container}>
                <Text style={{fontFamily:'sahel'  ,fontSize:28}}>چک لسیت ۱۲۳</Text>
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