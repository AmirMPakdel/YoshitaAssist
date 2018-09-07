import React from 'react';
import {StyleSheet, View, ScrollView,Dimensions, TouchableOpacity
  ,KeyboardAvoidingView, ImageBackground, Image, Text} from 'react-native';
import Colors from '../Colors';
import Picker from '../components/UI/Picker/Picker';
import NewEventButton from '../components/NewEventButton';
import EventTypeButton from '../components/EventTypeButton';
import NewEventInput from '../components/NewEventInput';
import EventInput from '../components/EventInput';
import NewEventMid from '../components/NewEventMid';
import EventSubmit from '../components/EventSubmit';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PopEventType from '../popups/PopEventType';
import PopupDialog, { SlideAnimation, ScaleAnimation } from 'react-native-popup-dialog';
import PopTimeChoosing from '../popups/PopTimeChoosing';
import PopDateChoosing from '../popups/PopDateChoosing';

import {yearsMap, weekNameMap, monthNameMap,
 daysNumberMap, repeatChoice, minutesMap, hoursMap} from '../data/PickersList';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const slideAnimation = new SlideAnimation({
  slideFrom: 'top',
  useNativeDriver: true,
});

const scaleAnimation = new ScaleAnimation({
  useNativeDriver: true,
})

export default class NewEvent extends React.Component{

    render(){

        return(

            <KeyboardAwareScrollView>
            <View style={styles.container}>

                <PopupDialog dialogAnimation={slideAnimation} width={Width*0.86} height={Height*0.72}
                ref={(PopupDialog) => { this.PopupDialog = PopupDialog; }}>

                                <PopEventType style={{margin:20}}/>
                </PopupDialog>

                <PopupDialog dialogAnimation={scaleAnimation} width={Width*0.86} height={Height*0.5}
                ref={(PopupDialog) => { this.DateD = PopupDialog; }}
                style={{position:'absolute'}}>

                                <PopDateChoosing style={{margin:20}}/>
                </PopupDialog>

                <PopupDialog dialogAnimation={scaleAnimation} width={Width*0.8} height={Height*0.78}
                ref={(PopupDialog) => { this.TimeD = PopupDialog; }}>

                                <PopTimeChoosing style={{margin:20}}/>
                </PopupDialog>

                <View style={styles.header_con}>

                <ImageBackground style={styles.bg} source={require('../assets/images/new_event_bg.png')}>
                <View style={styles.header}>

                    <View style={styles.title_con}>

                        <Text style={styles.text1}>برنامت رو بچین. من حواسم هست :)</Text>

                    </View>

                    <View style={styles.button_inputs_con}>

                        <View style={styles.button}>
                            <EventTypeButton onpress={()=>
                                {

                                this.PopupDialog.show()

                                }

                            } title="نوع رویداد"/>

                        </View>

                        <View style={styles.event_name_in}>
                            <EventInput ph="عنوان رویداد"/>
                        </View>

                        <View style={styles.event_info_in}>
                            <EventInput ph="جزییات"/>
                        </View>
                    </View>

                </View>
                </ImageBackground>
                </View>




                <View style={styles.middle_con}>

                <View style={styles2.container_mid}>
                    <View style={styles2.top_con}>

                    <View style={styles2.date_bt}>
                    <NewEventButton theme="fill" text="تاریخ رویداد"
                    onpress={()=>{

                        this.DateD.show();
                    }}/>
                    </View>

                    <View style={styles2.time_bt}>
                    <NewEventButton theme="fill" text="ساعت رویداد"
                    onpress={()=>{

                        this.TimeD.show();
                    }}/>
                    </View>

                </View>

                <View style={styles2.mid_con}>

                    <View style={styles2.mid_top_con}>

                        <Picker data={repeatChoice} firstIndex={0} onSnapToItem={()=>{}}
                                itemTextStyle={{fontSize:18, paddingBottom: 4, fontFamily: Colors.font, color:Colors.m_perpel}}
                                width= {Width*0.4} itemHeight={Height*0.05} borderRadius={20}
                                pickerStyle={{borderColor:Colors.m_perpel}}/>

                        <Text style={styles2.text1}>وضعیت تکرار</Text>

                    </View>

                    <View style={styles2.mid_low_con}>

                        <View style={styles2.reminder_con}>

                            <View style={styles2.reminder_input}>
                                <NewEventInput ph=" دقیقه قبلش"/>
                            </View>

                            <View style={styles2.reminder_text_con}>
                                <Text style={styles2.text1}>کی یادآوری کنم؟</Text>
                            </View>

                        </View>

                        <View style={styles2.warning_con}>
                            <Text style={styles2.text2}>ساعت و تاریخ رویداد رو مشخص کن</Text>
                        </View>

                    </View>

                </View>

                <View style={styles2.low_con}>

                    <View style={styles2.cancel_bt}>
                    <NewEventButton text="انصراف"/>
                    </View>

                    <View style={styles2.accept_bt}>
                    <NewEventButton theme="fill" backgroundColor="gray" text="ثبت رویداد"/>
                    </View>

                    </View>
                </View>
                </View>





                <View style={styles.bottom_con}>

                    <Image style={{position:'absolute', height:Height*0.1, width: Width}}
                    source={require('../assets/images/new_event_bg.png')}/>

                    <View style={styles.footer}>

                        <View style={styles.footer_condition_con}>
                            <Text style={styles.footer_condition_text}> متوسط</Text>
                        </View>

                        <Text style={styles.text3}>وضعیت کلی یکشنبه ۲۳ مرداد ۱۳۹۷</Text>
                    </View>
                </View>

            </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        height:Height,
        width:Width,
        alignItems:'center',
        backgroundColor: Colors.Whitebackground,
    },

    bg:{
        position:'absolute',
        height:'100%',
        width:'100%',
    },

    header_con:{

        height:'40%',
        width:'100%',
        justifyContent:'center',
    },

    middle_con:{

        height:'52%',
        width:'100%',
        backgroundColor:'white'
    },

    bottom_con:{
        height:'8%',
        width:'100%',
    },

    header:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        backgroundColor:Colors.m_perpel_glass,
    },

    footer:{

        height:'100%',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:Colors.m_perpel_glass,
    },

    footer_condition_con:{

        height: '56%',
        width: '24%',
        borderColor: '#FFFFFF',
        borderWidth: 1.2,
        borderRadius: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
        paddingLeft: 2,
        paddingBottom: 2,
    },

    title_con:{

        height: '34%',
        width:'100%',
        paddingBottom: 10,
        justifyContent:'flex-end',
        alignItems:'center',
    },

    button_inputs_con:{

        height: '66%',
        width:'100%',
        paddingBottom: 10,
        alignItems:'center',
        justifyContent: 'space-around',
    },

    button:{

        height:'27%',
        width:'86%',
        marginVertical:5,
    },

    event_name_in:{

        height:'27%',
        width:'86%',
        marginVertical:5,

    },

    event_info_in:{
        height:'27%',
        width:'86%',
        marginVertical:5,

    },

    text1:{
        fontFamily:'sahel',
        fontSize:20,
        color:'rgba(255,255,255,0.8)'
    },

    text3:{

        marginRight: 20,
        fontFamily:'sahel',
        fontSize:13,
        color:'#FFFFFF'
    },

    footer_condition_text:{

        fontFamily:'sahel',
        fontSize:12,
        color:'#FFFFFF'
    }

  });

  const styles2 = StyleSheet.create({

      container_mid:{
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

  });
