import React from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';
import Picker from './UI/Picker/Picker';
import {yearsMap, weekNameMap, monthNameMap,
 daysNumberMap, repeatChoice} from '../data/PickersList';
import Colors from '../Colors';
import EventCheckBox from './EventCheckBox';


const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export default class EventDatePicker extends React.Component{

    render(){

    let mData = [{key:'shahrivar', value:'ﺷﻬﺮیﻭﺭ'}, {key:'shahrivar', value:'ﺷﻬﺮیﻭﺭ'},
        {key:'shahrivar', value:'ﺷﻬﺮیﻭﺭ'}];


    return(

            <View style={styles.container}>

                <View style={styles.title_con}>
                    <Text style={styles.title1}>تاریخ رویداد جدید رو وارد کن</Text>
                </View>

                <View style={styles.pickers_con}>
                    <Picker data={yearsMap} firstIndex={0} onSnapToItem={()=>{}}
                            width={Width * 0.2} itemHeight={Height * 0.06}
                            itemTextStyle={{fontFamily: Colors.font, color:Colors.m_perpel}}
                            pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}/>

                    <Picker data={monthNameMap} firstIndex={0} onSnapToItem={()=>{}}
                            itemTextStyle={{fontFamily: Colors.font, color:Colors.m_perpel}}
                            width={Width * 0.3} itemHeight={Height * 0.06}
                            pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}/>

                    <Picker data={daysNumberMap} firstIndex={0} onSnapToItem={()=>{}}
                            itemTextStyle={{fontFamily: Colors.font, color:Colors.m_perpel}}
                            width={Width * 0.1} itemHeight={Height * 0.06}
                            pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}/>

                    <Picker data={weekNameMap} firstIndex={0} onSnapToItem={()=>{}}
                            itemTextStyle={{fontFamily: Colors.font, color:Colors.m_perpel}}
                            width={Width * 0.25} itemHeight={Height * 0.06}
                            pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}/>

                </View>

                <View style={styles.mid_low_con}>
                    <View style={styles.repeat_con}>

                        <Text style={styles.title1}>تکرار</Text>

                        <Picker data={repeatChoice} firstIndex={0} onSnapToItem={()=>{}}
                                itemTextStyle={{fontSize:20, fontFamily: Colors.font, color:Colors.m_perpel}}
                                width={Width * 0.25} itemHeight={Height * 0.04}
                                pickerStyle={{borderColor:Colors.m_perpel, margin:Width * 0.01}}/>


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
        backgroundColor:'white',
        alignItems:'center',

    },

    title_con:{

        height:'15%',
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',

    },

    pickers_con:{

        flex:1,
        paddingHorizontal:1,
        flexDirection:'row',
        justifyContent: 'center',  
        backgroundColor:'white'

    },

    mid_low_con:{

        height: '50%',
        width: '100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: 'red'
    },

    repeat_con:{

        height: '100%',
        width: '36%',
        alignItems: 'center', 
        backgroundColor: 'gray'
    },

    title1:{

        fontSize:26,
        color:'rgba(167, 72, 214,1)',
        fontFamily:'sahel',
        
    },
})