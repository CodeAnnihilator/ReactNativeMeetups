import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeNavigator from './HomeNavigator';

export default createAppContainer(createStackNavigator({
	Home: HomeNavigator,
}));
