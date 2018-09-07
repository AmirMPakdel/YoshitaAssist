import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import NewEventButton from './NewEventButton';
import Picker from './UI/Picker/Picker';
import {yearsMap, weekNameMap, monthNameMap,
 daysNumberMap, repeatChoice, minutesMap, hoursMap} from '../data/PickersList';
import NewEventInput from './NewEventInput';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import PopTimeChoosing from '../popups/PopTimeChoosing';
import PopDateChoosing from '../popups/PopDateChoosing';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


const slideAnimation = new SlideAnimation({
  slideFrom: 'top',
  useNativeDriver: true,
});

export default class EventInput extends React.Component{

    render(){

      let DateChoosingD = this.props.DateD;
      let TimeChoosingD = this.props.TimeD;

      /*if (DateChoosingD === undefined){
        alert("no");
      }*/

        return(

            <View style={styles.container}>

                <PopupDialog dialogAnimation={slideAnimation} width={Width*0.86} height={Height*0.2}
                ref={(PopupDialog) => { this.DateD = PopupDialog; }}
                style={{position:'absolute'}}>

                                <PopDateChoosing style={{margin:20}}/>
                </PopupDialog>

                <PopupDialog dialogAnimation={slideAnimation} width={Width*0.86} height={Height*0.2}
                ref={(PopupDialog) => { this.TimeD = PopupDialog; }}>

                                <PopTimeChoosing style={{margin:20}}/>
                </PopupDialog>

                <View style={styles.top_con}>

                    <View style={styles.date_bt}>
                    <NewEventButton theme="fill" text="تاریخ رویداد"
                    onpress={()=>{

                        this.DateD.show();
                    }}/>
                    </View>

                    <View style={styles.time_bt}>
                    <NewEventButton theme="fill" text="ساعت رویداد"
                    onpress={()=>{

                        this.TimeD.show();
                    }}/>
                    </View>

                </View>

                <View style={styles.mid_con}>

                    <View style={styles.mid_top_con}>

                        <Picker data={repeatChoice} firstIndex={0} onSnapToItem={()=>{}}
                                itemTextStyle={{fontSize:18, paddingBottom: 4, fontFamily: Colors.font, color:Colors.m_perpel}}
                                width= {Width*0.4} itemHeight={Height*0.05} borderRadius={20}
                                pickerStyle={{borderColor:Colors.m_perpel}}/>

                        <Text style={styles.text1}>وضعیت تکرار</Text>

                    </View>

                    <View style={styles.mid_low_con}>

                        <View style={styles.reminder_con}>

                            <View style={styles.reminder_input}>
                                <NewEventInput ph=" دقیقه قبلش"/>
                            </View>

                            <View style={styles.reminder_text_con}>
                                <Text style={styles.text1}>کی یادآوری کنم؟</Text>
                            </View>

                        </View>

                        <View style={styles.warning_con}>
                            <Text style={styles.text2}>ساعت و تاریخ رویداد رو مشخص کن</Text>
                        </View>

                    </View>

                </View>

                <View style={styles.low_con}>

                    <View style={styles.cancel_bt}>
                    <NewEventButton text="انصراف"/>
                    </View>

                    <View style={styles.accept_bt}>
                    <NewEventButton theme="fill" backgroundColor="gray" text="ثبت رویداد"/>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        paddingVertical: '2%',
        alignItems:'center',
        backgroundColor: '#d3d3d3'
    },

    top_con:{

        height: '18%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    mid_con:{

        height: '64%',
        width: '90%',

    },

    low_con:{

        height: '18%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },


    time_bt:{

        height: '72%',
        width: '45%',
    },

    date_bt:{

        height: '72%',
        width: '45%',
    },

    mid_top_con:{

        height: '56%',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    mid_low_con:{

        height: '44%',
        width: '100%',
        justifyContent:'space-around',
        alignItems: 'center',
    },

    reminder_con:{

        height: '66%',
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },

    reminder_input:{

        height: '80%',
        width: '45%',

    },

    reminder_text_con:{

        height: '100%',
        width: '45%',
        justifyContent:'center',
        alignItems:'center',
    },

    warning_con:{

        height: '34%',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',

    },

    accept_bt:{

        height: '70%',
        width: '45%',
    },

    cancel_bt:{

        height: '70%',
        width: '45%',
    },

    text1:{

        fontFamily:'sahel',
        fontSize:18,
        textAlign: 'center',
        color:Colors.m_perpel,
        marginRight:'8%'
    },

    text2:{
        fontFamily:'sahel',
        fontSize:12,
        textAlign: 'center',
        color:'red',
    },

})
