import { createStackNavigator } from 'react-navigation';
import EventManager from '../screens/EventManager';
import Calendar from '../screens/Calendar';
import CheckList from '../screens/CheckList';
import NewEvent from '../screens/NewEvent';
import Home from '../screens/Home';
import TimeLine from '../screens/TimeLine';
import TabBar from './TabBar';

export default (TabNavigator = createStackNavigator(
  {
    EventManager: {
      screen: EventManager
    },

    NewEvent: {
      screen: NewEvent
    },

    Home: {
      screen: Home
    },

    TimeLine: {
      screen: TimeLine
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',

    animationEnabled: true,

    navigationOptions: {}
  }
));
