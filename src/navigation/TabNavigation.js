import { createStackNavigator } from 'react-navigation';
import EventManager from '../screens/EventManager';
import NewEvent from '../screens/NewEvent';
import Home from '../screens/Home';
import TimeLine from '../screens/TimeLine';
import Player from '../screens/Player';

export default (TabNavigator = createStackNavigator(
  {
    EventManager: {
      screen: EventManager
    },

    Player: {
      screen: Player
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
