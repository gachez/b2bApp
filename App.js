import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from './src/SignIn'
import SignUpScreen from './src/SignUp'

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
  }
  
});

const App = createAppContainer(MainNavigator);

export default App;