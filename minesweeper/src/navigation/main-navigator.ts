// Dependencies
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Views
import Home from '../views/Home';
import Game from '../views/Game';
import Help from '../views/Help';

const MainStackNavigator = createStackNavigator(
  {
    Home,
    Game,
    Help
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default createAppContainer(MainStackNavigator);