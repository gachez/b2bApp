import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from './src/SignIn'
import SignUpScreen from './src/SignUp'
import UserInfo from './src/UserInfo'
import SelectInterest from './src/SelectInterest'
import EventsScreen from './src/EventsScreen';

const MainNavigator = createStackNavigator({

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
  }
  
});

const App = createAppContainer(MainNavigator);

export default App;