import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';


export default class EventSubmit extends React.Component{


	render(){

		return(

			<View style={styles.container}>

				<View style={styles.left_con}>

					<View style={styles.submit_button_con}>
					<TouchableOpacity  style={styles.submit_button}>
						
							<Text style={styles.submit_text}>ثبت رویداد</Text>
		
					</TouchableOpacity>
					</View>

				</View>
				
				<View style={styles.right_con}>

					
				</View>

			</View>
		)
	}
}


const styles = StyleSheet.create({

	container:{
		height: '100%',
		width:'100%',
		flexDirection:'row',
		backgroundColor: 'blue',
	},

	left_con:{
		height: '100%',
		width: '40%',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: 'white'
	},

	right_con:{
		height: '100%',
		width:'60%',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'gray'
	},

	submit_button_con:{

		height: '60%',
		width:'70%',
	},

	submit_button:{

		height: '100%',
		width:'100%',
		borderRadius: 20,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: 'blue'
	},

	submit_text:{
		
		fontFamily: 'sahel',
		color:'#FFFFFF',
		fontSize:16,
	},

})