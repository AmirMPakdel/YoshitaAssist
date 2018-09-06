import React from 'react';
import {StyleSheet, View, ScrollView,Dimensions, ImageBackground, Image, Text} from 'react-native';
import Colors from '../Colors';
import  EventTypeButton from '../components/EventTypeButton';
import EventInput from '../components/EventInput';
import EventDatePicker from '../components/EventDatePicker';


const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export default class NewEvent extends React.Component{
    
    render(){

        return(

            <View style={styles.container}>

                <View style={styles.header_con}>

                <ImageBackground style={styles.bg} source={require('../assets/images/new_event_bg.png')}/>
                <View style={styles.header}>

                    <Text style={styles.text1}>برنامت رو بچین. من حواسم هست :)</Text>
                    
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
                <View style={styles.middle_con}>

                    <EventDatePicker/>

                </View>
                <View style={styles.bottom_con}>

                </View>

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

    scrollView:{

        flex:1
    },

    bg:{
        position:'absolute',
        height:'100%',
        width:'100%',
    },

    header_con:{

        height:Height * 0.38,
        width:'100%',
        backgroundColor:'red'

    },

    header:{
        height:'100%',
        width:'100%',
        paddingTop:30,
        alignItems:'center',
        backgroundColor:'rgba(167, 72, 214,0.4)'
    },

    button:{

        height:'18%',
        width:'30%',
        marginTop:16,
        marginBottom:10,
    },

    event_name_in:{

        height:'20%',
        width:'50%',
        marginTop:12

    },

    event_info_in:{
        height:'20%',
        width:'80%',
        marginVertical:12,

    },

    middle_con:{

        height:Height * 0.48,
        width:'100%',
        elevation: 10,
        borderTopWidth: 3,
        borderTopColor: 'rgba(1,1,1,0.8)',
        backgroundColor:'white'

    },

    bottom_con:{

        height:Height * 0.18,
        width:'100%',
        backgroundColor:'green'
    },

    text1:{
        fontFamily:'sahel',
        fontSize:20,
        color:'rgba(255,255,255,0.8)'
    }
  
  });