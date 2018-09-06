import React from 'react';
import {StyleSheet,TouchableOpacity,Image, View, Text, ImageBackground} from 'react-native';
import Colors from '../Colors';
import EventsInfoBar from '../components/EventsInfoBar';
import SearchBar from '../components/SearchBar';

export default class Home extends React.Component{

    render(){

        
        return(
            <ImageBackground style= {styles.bg}source={require('../assets/images/home_bg.png')}>
            <View style={styles.container}>

                <View style={styles.up_con}>

                    <View style={styles.header}>

                        <SearchBar/>

                    </View>

                    <View style={styles.welcome}>

                        <Text style={styles.text_reg_glass}>نزدیک ترین رویداد</Text>
                        <View style={{flex:1, marginVertical:3}}>
                        <Text style={styles.text_big1}>قرار ملاقات با مهندس پاکدل</Text>
                        </View>
                        <View style={styles.blueLine}/>
                        <Text style={styles.text_small1}>یکشنبه ۲۳مرداد ۱۳۹۷</Text>

                    </View>

                </View>
                
                <View style={styles.down_con}>

                    <View style={styles.new_event_btn}>

                        <TouchableOpacity>

                            <Text style={styles.text_big1}>رویداد جدید</Text>
                        
                        </TouchableOpacity>
                            
                    </View>

                    <View style={styles.busy_info_con}>

                        <View style={styles.cirlc_con}>
                            
                            <Text style={styles.text_big2}>متوسط</Text>

                        </View>

                        <View style={styles.evensInfo_con}>

                            <EventsInfoBar/>
                            
                        </View>

                    </View>

                    <View style={styles.see_events_con}>

                        <Text style={styles.text_big1}>مشاهده برنامه ها و رویداد ها</Text>


                    </View>
                    

                </View>

            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    bg:{

        height:'100%',
        width:'100%',

    },

    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    },

    up_con:{

        height:'36%',
        width:'96%',
        justifyContent:'space-between',
        padding:5,
        paddingBottom:15,
    },

    header:{
        height:'15%',
        width:'100%',
    },

    welcome:{
        height:'50%',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
    },

    blueLine:{
        height:'3%',
        width:'30%',
        marginVertical:3,
        borderRadius:50,
        backgroundColor:'rgba(72, 0, 255,0.5)'
    },

    down_con:{
        height:'60%',
        width:'96%',
        padding:5,

    },

    new_event_btn:{

        height:'14%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5,
        borderRadius:10,
        marginVertical:5,
        backgroundColor:"rgba(72, 0, 255,0.3)"

    },

    busy_info_con:{

        height:'55%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginVertical:5,
        backgroundColor:"rgba(65, 54, 94, 0.85)"
    },

    cirlc_con:{
        height:'45%',
        width:'26.4%',
        elevation:20,
        borderWidth:2,
        borderColor:'rgba(1,1,1,0.2)',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:8,
        backgroundColor:Colors.ThirdColor
    },

    evensInfo_con:{

        height:'26%',
        width:'90%',
        marginTop:30,
        borderRadius:5,
    },

    see_events_con:{

        height:'27%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginVertical:5,
        backgroundColor:"rgba(72, 0, 255,0.3)"
    },

    text_reg:{

        fontSize:16,
        color:"#FFFFFF",
        fontFamily:'sahel'

    },

    text_small1:{

        fontSize:14,
        color:"#FFFFFF",
        fontFamily:"sahel"

    },

    text_big1:{

        fontSize:22,
        color:"#FFFFFF",
        fontFamily:'sahel'

    },

    text_big2:{

        fontSize:24,
        color:"#FFFFFF",
        fontFamily:'sahel'

    },

    text_reg_glass:{

        fontSize:14,
        opacity:0.6,
        color:"#FFFFFF",
        fontFamily:'sahel'

    }

  });