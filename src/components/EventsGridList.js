import React from 'react';
import {View,StyleSheet, Text,ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../Colors';
import EventItem from './EventItem';

export default class EventsGridList extends React.Component{


	render(){


		return(

			<View style={styles.container}>

				<ScrollView style={{height: '100%', width: '100%'}}>

					<View style={styles.row}>
						<View style={styles.item_con}>
							<EventItem backgroundColor={Colors.hat} src={require('../assets/icons/cake.png')}/>
						</View>

						<View style= {styles.item_con}>
							<EventItem backgroundColor={Colors.hands} src={require('../assets/icons/hands.png')}/>
						</View>
					</View>

					<View style={styles.row}>
						<View style={styles.item_con}>
							<EventItem backgroundColor={Colors.arm} src={require('../assets/icons/arm.png')}/>
						</View>

						<View style= {styles.item_con}>
							<EventItem backgroundColor={Colors.drink} src={require('../assets/icons/drink.png')}/>
						</View>
					</View>

					<View style={styles.row}>
						<View style={styles.item_con}>
							<EventItem backgroundColor={Colors.email} src={require('../assets/icons/email.png')}/>
						</View>

						<View style= {styles.item_con}>
							<EventItem backgroundColor={Colors.medic} src={require('../assets/icons/medic.png')}/>
						</View>
					</View>

				</ScrollView>

			</View>
		)
	}
}

const imageList = [

	{name:'cake', src:require('../assets/icons/cake.png')},

];


const styles = StyleSheet.create({

	container:{
		height: '100%',
		width: '100%',
        padding:'5%',
        alignItems:'center',
        justifyContent:'space-around',
	},

	row:{

		height: 80,
		width: '100%',
		marginVertical:8,
		flexDirection:'row',
		justifyContent:'space-around',
	},

	item_con:{

		height: '100%',
		width: '40%',

	},
})
