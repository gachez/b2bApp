import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from './src/SignIn'
import SignUpScreen from './src/SignUp'
import UserInfo from './src/UserInfo'
import SelectInterest from './src/SelectInterest'
import EventsScreen from './src/EventsScreen';
import EventScreen from './src/EventScreen'
import Welcome from './src/Welcome'


const MainNavigator = createStackNavigator({


  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },

  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null,
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null,
    }
  },
  UserInfo: {
    screen: UserInfo,

  },
  SelectInterest: {
    screen: SelectInterest,

  },
  EventsScreen: {
    screen: EventsScreen,
    navigationOptions: {
      header: null,
    }
  },
  EventScreen: {
    screen: EventScreen
  }
  
});

const App = createAppContainer(MainNavigator);

export default App;