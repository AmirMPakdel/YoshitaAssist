import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../Colors';


export default class EventTypeButton extends React.Component{

    render(){

        return(

            <TouchableOpacity style={{flex:1}}>
            <View style={styles.container}>

                <Text style={styles.text}>{this.props.title}</Text>
            
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:8,
        borderRadius:40,
        backgroundColor:"#FFFFFF",
    },

    text:{

        fontFamily:'sahel',
        fontSize:20,
        color:Colors.m_perpel,
    }

})