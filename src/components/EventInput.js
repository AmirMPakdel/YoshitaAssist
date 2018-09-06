import React from 'react';
import {View,StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class EventInput extends React.Component{

    render(){

        return(

            <TouchableOpacity style={{flex:1}}>
            <View style={styles.container}>

                <TextInput style={styles.text} 
                placeholderTextColor="rgba(255,255,255,0.5)" 
                placeholder={this.props.ph}></TextInput>
            
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
        paddingBottom:4,
        borderRadius:40,
        backgroundColor:'rgba(167, 72, 214, 0.6)'
    },

    text:{
        height:'100%',
        width:'100%',
        fontFamily:'sahel',
        fontSize:16,
        textAlign: 'center',
        color:"#FFFFFF"
    }

})