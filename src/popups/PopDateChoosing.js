import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Colors from '../Colors';
import Picker from '../components/UI/Picker/Picker';
import {yearsMap, weekNameMap, monthNameMap,
 daysNumberMap, repeatChoice, minutesMap, hoursMap} from '../data/PickersList';
import NewEventButton from '../components/NewEventButton';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


export default class PopDateChoosing extends React.Component{

  constructor(props){
    super(props);

    this.date = {};
  }

setDay = (day)=>{

  this.date.day = day;
}

setMonth = (month)=>{

  this.date.month = month;
}

setYear = (year)=>{

  this.date.year = year;
}

getDate =()=>{
  return this.date;
}


accept = ()=>{
  //alert(JSON.stringify(this.getDate()));
  this.props.dis(this.getDate());
}

render(){

      /*this.state = {
        date:{
        year:null,
        month:null,
        day:null,
      }};*/



        return(

                <View style={styles.container}>

                    <View style={styles.title_con}>

                        <Text style={styles.text1}>تاریخ رویداد جدید رو انتخاب کن</Text>
                    </View>

                    <View style={styles.pickers_con}>
                        <Picker data={yearsMap} firstIndex={0} onSnapToItem={()=>{}}
                                width={Width * 0.2} itemHeight={Height * 0.06}
                                itemTextStyle={{fontFamily: Colors.font, color:Colors.m_perpel}}
                                pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}
                                onSnapToItem = {(item, index)=>{
                                this.setYear(item.key)
                                }}/>

                        <Picker data={monthNameMap} firstIndex={0} onSnapToItem={()=>{}}
                                itemTextStyle={{fontFamily: Colors.font, color:Colors.m_perpel}}
                                width={Width * 0.3} itemHeight={Height * 0.06}
                                pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}
                                onSnapToItem = {(item, index)=>{
                                  this.setMonth(item.key);
                                }}/>

                        <Picker data={daysNumberMap} firstIndex={0} onSnapToItem={()=>{}}
                                itemTextStyle={{fontFamily: Colors.font, color:Colors.m_perpel}}
                                width={Width * 0.1} itemHeight={Height * 0.06}
                                pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}
                                onSnapToItem = {(item, index)=>{
                                  this.setDay(item.key);
                                }}/>
                    </View>

                    <View style={styles.footer}>

                      <View style={styles.button}>
                        <NewEventButton onpress={this.accept} theme="fill" text="ثبت"/>
                      </View>
                    </View>

                </View>

        )
    }
}

const styles = StyleSheet.create({

	container:{
		height: '100%',
		width: '100%',
        padding:'5%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
	},

    title_con:{

        height: '30%',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',

    },

    pickers_con:{

        height: '50%',
        width:'95%',
        paddingHorizontal:1,
        flexDirection:'row',
        justifyContent: 'space-around',

    },

    footer:{
      height: '20%',
      width: '100%',
      alignItems:'center',
      justifyContent:'center',

    },

    button:{

      height: '80%',
      width: '40%',

    },

    text1:{

        fontFamily: 'sahel',
        fontSize: 20,
        color:Colors.m_perpel,
    },
})
