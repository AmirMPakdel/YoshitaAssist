import React from 'react';
import {StyleSheet,ScrollView, Dimensions, View, Text} from 'react-native';
import Colors from '../Colors';
const PersianCalendarPicker = require('react-native-persian-calendar-picker');

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export default class Calendar extends React.Component{

    constructor(props) {
        super(props);
 
    this.state = {
      selectedStartDate: null,
    };
 
        this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    this.setState({ selectedStartDate: date });
  }
 
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>

        <ScrollView style={styles.scrollView}>
 
        <PersianCalendarPicker
          onDateChange={this.onDateChange}
          isRTL={true}
          textStyle={styles.text}/>
 
        <View style={styles.events_con}>
          <View style={styles.events}>
            <View style={styles.title}>

                <Text style={{height:40, width:200}}>Hello u fucking calendar!!!</Text>

            </View>
            <View style={styles.line}/>

            <View style={styles.list}>

            </View>

          </View>
        </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
      flex:1,
      marginTop: 30,
      backgroundColor: Colors.Whitebackground,
    },

    scrollView:{

        flex:1,
        backgroundColor:'red'
    },

    text:{
        color: Colors.ThirdColor,
        fontSize:17,
        fontFamily:'Negaar'
    },

    events_con:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },

    events:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'yellow'
    },

    title:{
        height: Height * 0.08,
        width: Width * 0.88,
        borderRadius:10,
        backgroundColor:'white'
    },

    line:{
        height: Height * 0.003,
        width: Width * 0.84,
        marginVertical:4,
        borderRadius:10,
        backgroundColor:'gray'
    },

    list:{
        height: Height * 0.55,
        width: Width * 0.88,
        borderRadius:10,
        backgroundColor:'orange'
    }
})