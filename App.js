import 'expo';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import { createStackNavigator } from 'react-navigation';

const Navigation = createStackNavigator({
  Home: {screen: HomeScreen},
  Result: {screen: ResultScreen}
});

export default Navigation;