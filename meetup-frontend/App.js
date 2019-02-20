import React from 'react';
import {AppLoading} from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import Root from './src/Root';

import Colors from './constants/Colors';
import {cachedFonts} from './helpers';

EStyleSheet.build(Colors);

export default class App extends React.Component {
	state = {
		fontLoaded: false,
	}

	componentDidMount() {
		this._loadAssetAsync();
	}

	async _loadAssetAsync() {
		const fontAssets = cachedFonts([
			{montserrat: require('./assets/fonts/Montserrat-Regular.ttf')},
			{montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')},
			{montserratLight: require('./assets/fonts/Montserrat-Light.ttf')},
		]);
		await Promise.all(fontAssets);

		this.setState({fontLoaded: true});
	}

	render() {
		if (!this.state.fontLoaded) {
			return <AppLoading />;
		}
		return (
			<Root />
		);
	}
}

