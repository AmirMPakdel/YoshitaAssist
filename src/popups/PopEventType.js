import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import NewEventButton from './NewEventButton';
import Picker from './UI/Picker/Picker';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


export default class EventInput extends React.Component{

    render(){

        return(

        	<View style={styles.container}>
        	</View>
        )
    }
}

const styles = StyleSheet.create({

	container:{
		height: '100%',
		width: '100%',
		backgroundColor: 'blue',
	}
})