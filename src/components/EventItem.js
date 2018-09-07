import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../Colors';

export default class EventItem extends React.Component{


	render(){

		let styles = StyleSheet.create({

			container:{
				height: '100%',
				width: '100%',
		    padding:'8%',
				borderRadius:10,
		    alignItems:'center',
		    justifyContent:'center',
		    backgroundColor: this.props.backgroundColor,
			},


			img:{

				//flex:1,
				height: 50,
				width:50,
			}
		});


		return(

			<TouchableOpacity style={{flex:1}}
			onPress={this.props.onpress}>
				<View style={styles.container}>

					<Image style={styles.img} source={this.props.src}/>

				</View>
			</TouchableOpacity>
		)
	}
}
