import React from 'react';
import {View,StyleSheet, Text,ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../Colors';
import EventItem from './EventItem';
import {connect} from 'react-redux';

class EventsGridList extends React.Component{


	render(){


		setType = (type)=>{

			this.props.getEventType(type);

		}

		return(

			<View style={styles.container}>

					<View style={styles.row}>
						<View style={styles.item_con}>
							<EventItem backgroundColor={Colors.hat}
								onpress = {()=>{this.props.dialog.dismiss()}}
							 src={require('../assets/icons/hat.png')}/>
						</View>

						<View style= {styles.item_con}>
							<EventItem backgroundColor={Colors.hands}
							onpress = {setType("meeting")}
							src={require('../assets/icons/hands.png')}/>
						</View>
					</View>

					<View style={styles.row}>
						<View style={styles.item_con}>
							<EventItem backgroundColor={Colors.arm}
							onpress = {setType("gym")}
							src={require('../assets/icons/arm.png')}/>
						</View>

						<View style= {styles.item_con}>
							<EventItem backgroundColor={Colors.drink}
							onpress = {setType("party")}
							src={require('../assets/icons/drink.png')}/>
						</View>
					</View>

					<View style={styles.row}>
						<View style={styles.item_con}>
							<EventItem backgroundColor={Colors.email}
							onpress = {setType("email")}
							src={require('../assets/icons/email.png')}/>
						</View>

						<View style= {styles.item_con}>
							<EventItem backgroundColor={Colors.medic}
							onpress = {setType("doctor")}
							src={require('../assets/icons/medic.png')}/>
						</View>
					</View>

			</View>
		)
	}
}

function mapStateToProps(state) {
  return {
    TypeDialog: state.TypeDialog
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsGridList)


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
