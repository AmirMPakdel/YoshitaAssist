import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Colors from '../Colors';
import EventsGridList from '../components/EventsGridList';
import NewEventButton from '../components/NewEventButton';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


export default class PopEventType extends React.Component{


    render(){

        return(

                <View style={styles.container}>

                    <View style={styles.title_con}>

                        <Text style={styles.text1}>نوع رویداد رو مشخص کن</Text>
                    </View>

                    <View style={styles.events}>
                        <EventsGridList/>
                    </View>

                </View>

        )
    }
}

const styles = StyleSheet.create({

	container:{
		height: '100%',
		width: '100%',
        padding:'5%',
        alignItems:'center',
        justifyContent:'center',
	},

    title_con:{

        height: '18%',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',

    },

    events:{

        height: '82%',
        width: '100%',
    },

    text1:{

        fontFamily: 'sahel',
        fontSize: 22,
        color:Colors.m_perpel,
    },
})
