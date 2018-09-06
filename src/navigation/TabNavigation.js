import {createTabNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import CheckList from '../screens/CheckList';
import NewEvent from '../screens/NewEvent';
import Map from '../screens/Map';
import TimeLine from '../screens/TimeLine';
import TabBar from './TabBar';


export default TabNavigator = createTabNavigator(
    
    {
        Map:{
            screen:Map
        },

        NewEvent:{
            screen:NewEvent
        },

        Home:{
            screen:Home
        },
        
        TimeLine:{
            screen:TimeLine
        }
    },
    {   
        initialRouteName:'NewEvent',

        animationEnabled:true,
        
        tabBarComponent:TabBar,

        tabBarPosition:'bottom',

        navigationOptions:{
            
        },
        
    }
)