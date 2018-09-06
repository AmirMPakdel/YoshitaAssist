import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class EventsInfoBar extends React.Component{


    render(){

        return(

            <View style={styles.container}>

                <View style={styles.tab}>

                    <Text style={styles.number}>۸</Text>
                    <Text style={styles.title}>ساعت</Text>

                </View>

                <View style={styles.line}/>

                <View style={styles.tab}>

                    <Text style={styles.number}>۳۴</Text>
                    <Text style={styles.title}>خرید</Text>

                </View>

                <View style={styles.line}/>
                
                <View style={styles.tab}>

                    <Text style={styles.number}>۵</Text>
                    <Text style={styles.title}>تلفن و پیام</Text>

                </View>

                <View style={styles.line}/>

                <View style={styles.tab}>

                    <Text style={styles.number}>۲</Text>
                    <Text style={styles.title}>قرار ملاقات</Text>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create(
    {

        container:{

            height:'100%',
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',

        },

        tab:{
            
            height:'100%',
            width:'25%',
            alignItems:'center',
            paddingBottom:10,
            justifyContent:'center',

        },

        number:{

            fontSize:18,
            color:'#75ccff',
            fontFamily:'sahel',


        },

        title:{
            
            fontSize:13,
            color:'#FFFFFF',
            fontFamily:'sahel',
        },

        line:{

            height:'100%',
            width:'0.6%',
            opacity:0.3,
            borderRadius:100,
            backgroundColor:'white'

        }
    }
)