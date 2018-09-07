import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import NewEventButton from './NewEventButton';
import Picker from './UI/Picker/Picker';
import {yearsMap, weekNameMap, monthNameMap,
 daysNumberMap, repeatChoice, minutesMap, hoursMap} from '../data/PickersList';
import {} from 'react-native-popup-dialog'


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


export default class EventInput extends React.Component{

    render(){

        return(

            <View style={styles.container}>

                <View style={styles.top_con}>

                    <View style={styles.date_bt}>
                    <NewEventButton theme="fill" text="تاریخ رویداد"/>
                    </View>

                    <View style={styles.time_bt}>
                    <NewEventButton theme="fill" text="ساعت رویداد"/>
                    </View>

                </View>

                <View style={styles.mid_con}>

                    <View style={styles.mid_top_con}>

                        <Picker data={repeatChoice} firstIndex={0} onSnapToItem={()=>{}}
                                itemTextStyle={{fontSize:18, paddingBottom: 4, fontFamily: Colors.font, color:Colors.m_perpel}}
                                width= {Width*0.46} itemHeight={Height*0.05} borderRadius={60}
                                pickerStyle={{borderColor:Colors.m_perpel}}/>

                        <Text style={styles.text1}>وضعیت تکرار</Text>
                                
                    </View>

                    <View style={styles.mid_low_con}>

                        <View style={styles.more_bt}>
                            <NewEventButton text="بیشتر..."/>
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

        height: '70%',
        width: '45%',
    },

    date_bt:{

        height: '70%',
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

    more_bt:{

        height: '50%',
        width: '100%',
    },

    warning_con:{

        height: '40%',
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
        fontSize:20,
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