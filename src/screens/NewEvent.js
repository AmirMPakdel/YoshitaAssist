import React from 'react';
import {StyleSheet, View, ScrollView,Dimensions,KeyboardAvoidingView, ImageBackground, Image, Text} from 'react-native';
import Colors from '../Colors';
import EventTypeButton from '../components/EventTypeButton';
import EventInput from '../components/EventInput';
import NewEventMid from '../components/NewEventMid';
import EventSubmit from '../components/EventSubmit';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class NewEvent extends React.Component{
    
    render(){

        return(

            <View style={styles.container}>

                <View style={styles.header_con}>

                <ImageBackground style={styles.bg} source={require('../assets/images/new_event_bg.png')}>
                <View style={styles.header}>

                    <View style={styles.title_con}>

                        <Text style={styles.text1}>برنامت رو بچین. من حواسم هست :)</Text>

                    </View>

                    <View style={styles.button_inputs_con}>

                        <View style={styles.button}>
                            <EventTypeButton title="نوع رویداد"/>
                        </View>

                        <View style={styles.event_name_in}>
                            <EventInput ph="عنوان رویداد"/>
                        </View>

                        <View style={styles.event_info_in}>
                            <EventInput ph="توضیحات"/>
                        </View>
                    </View>

                </View>
                </ImageBackground>
                </View>
                


                <View style={styles.middle_con}>
                    <NewEventMid/>
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
        )
    }
}

const styles = StyleSheet.create({

    container: {
        height:'100%',
        width:'100%',
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
        elevation:-20,
    },

    middle_con:{

        height:'52%',
        width:'100%',
        elevation: 20,
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