import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeNavigator from './HomeNavigator';

import {
	CreateMeetupScreen,
} from '../screens';

export default createAppContainer(createStackNavigator({
	Home: HomeNavigator,
	CreateMeetup: CreateMeetupScreen,
}, {
	mode: 'modal',
}));
