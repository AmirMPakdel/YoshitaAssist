import React from 'react';
import {View,StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../Colors';


export default class NewEventInput extends React.Component{

    render(){

        return(

            <View style={styles.container}>

                <TextInput style={styles.text} 
                placeholderTextColor={Colors.m_perpel_glass2} 
                placeholder={this.props.ph}></TextInput>
            
            </View>
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
        borderWidth: 1.8,
        paddingTop:1,
        borderColor: Colors.m_perpel,
    },

    text:{
        height:'100%',
        width:'100%',
        fontFamily:'sahel',
        fontSize:14,
        textAlign: 'center',
        color: Colors.m_perpel,
    }

})