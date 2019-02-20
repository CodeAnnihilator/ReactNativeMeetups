import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {
	HomeScreen,
	NotificationsScreen,
	ProfileScreen,
} from '../screens';

const getTabBarIcon = (navigation, focused, tintColor) => {
	const {routeName} = navigation.state;
	let iconName;
	
	if (routeName === 'Home') iconName = 'ios-home';
	else if (routeName === 'Notifications') iconName = 'ios-notifications';
	else if (routeName === 'Profile') iconName = 'ios-people';

	return <Ionicons name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(createBottomTabNavigator(
	{
		Home: HomeScreen,
		Notifications: NotificationsScreen,
		Profile: ProfileScreen,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused, tintColor}) => getTabBarIcon(navigation, focused, tintColor),
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	},
	{
		swipeEnabled: true,
		animationEnabled: true,
	}
));
