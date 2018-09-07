import React from 'react';
import {View,StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class EventInput extends React.Component{

    render(){

        return(

            <TouchableOpacity style={{flex:1}}>
            <View style={styles.container}>

                <TextInput style={styles.text}
                onChangeText = {this.props.onChangeText}
                placeholderTextColor="rgba(255,255,255,0.7)"
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
        borderRadius:40,
        borderWidth: 1.2,
        borderColor: 'rgba(255,255,255,0.8)',
    },

    text:{
        height:'100%',
        width:'100%',
        fontFamily:'sahel',
        fontSize:14,
        textAlign: 'center',
        color:"#FFFFFF"
    }

})
