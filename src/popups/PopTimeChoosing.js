import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Colors from '../Colors';
import Picker from '../components/UI/Picker/Picker';
import {yearsMap, weekNameMap, monthNameMap,hours2Map,
 daysNumberMap, repeatChoice, minutesMap, hoursMap} from '../data/PickersList';
import NewEventButton from '../components/NewEventButton';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


export default class PopDateChoosing extends React.Component{

  constructor(props){
    super(props);

    this.time = {};
    this.duration = {};
  }

  setTimeH = (hour)=>{

  this.time.hour = hour;
  }

  setTimeM = (minute)=>{

  this.time.minute = minute;
  }

  setDurationH = (hour)=>{

  this.duration.hour = hour;
  }

  setDurationM = (minute)=>{

  this.duration.minute = minute;
  }

  getTimeAndDuration =()=>{
    return {time:this.time, duration:this.duration};
  }


  accept = ()=>{
  //alert(JSON.stringify(this.getTimeAndDuration()));
  this.props.dis(this.getTimeAndDuration().time, this.getTimeAndDuration().duration);
  }

    render(){

        return(

                <View style={styles.container}>

                    <View style={styles.title_con}>

                        <Text style={styles.text1}>ساعت رویداد جدید رو انتخاب کن</Text>
                    </View>

                    <View style={styles.pickers_con}>

                      <View style={styles.time_con}>
                          <Picker data={hoursMap} firstIndex={0} onSnapToItem={()=>{}}
                              itemTextStyle={{fontSize:24, fontFamily: Colors.font, color:Colors.m_perpel}}
                              width={Width * 0.2} itemHeight={Height * 0.07}
                              pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}
                              onSnapToItem = {(item, index)=>{
                                this.setTimeH(item.key);
                              }}/>

                          <Text style={styles.text3}>:</Text>

                          <Picker data={minutesMap} firstIndex={0} onSnapToItem={()=>{}}
                              itemTextStyle={{fontSize:24,fontFamily: Colors.font, color:Colors.m_perpel}}
                              width={Width * 0.2} itemHeight={Height * 0.07}
                              pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}
                              onSnapToItem = {(item, index)=>{
                                this.setTimeM(item.key);
                              }}/>

                      </View>

                      <View style={styles.title2}>
                        <Text style={styles.text1}>چقدر طول میکشه؟</Text>
                      </View>

                      <View style={styles.time2_con}>

                        <Picker data={hours2Map} firstIndex={0} onSnapToItem={()=>{}}
                            itemTextStyle={{fontSize:24, fontFamily: Colors.font, color:Colors.m_perpel}}
                            width={Width * 0.2} itemHeight={Height * 0.07}
                            pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}
                            onSnapToItem = {(item, index)=>{
                              this.setDurationH(item.key)
                            }}/>

                        <Text style={styles.text3}>:</Text>

                        <Picker data={minutesMap} firstIndex={0} onSnapToItem={()=>{}}
                            itemTextStyle={{fontSize:24,fontFamily: Colors.font, color:Colors.m_perpel}}
                            width={Width * 0.2} itemHeight={Height * 0.07}
                            pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}
                            onSnapToItem = {(item, index)=>{
                              this.setDurationM(item.key)
                            }}/>

                      </View>

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

        height: '16%',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',

    },

    pickers_con:{

        height: '84%',
        width:'95%',
        paddingHorizontal:1,
        justifyContent: 'space-around',

    },

    time_con:{

        height: '45%',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    title2:{
      height: '10%',
      width: '100%',
      alignItems: 'center',
      justifyContent:'center',

    },

    time2_con:{
      height: '45%',
      width: '100%',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',

    },

    footer:{
      height: '10%',
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
        fontSize: 18,
        color:Colors.m_perpel,
    },

    text3:{

        fontFamily: 'sahel',
        fontSize: 40,
        color:Colors.m_perpel,
    },


})
