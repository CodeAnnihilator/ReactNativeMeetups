import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import {fetchMeetups} from './constants/api';

export default class App extends React.Component {
	static defaultProps = {
		fetchMeetups,
	};

	state = {
		loading: false,
		meetups: [],
	};

	async componentDidMount() {
		this.setState({loading: true});
		const data = await this.props.fetchMeetups();
		setTimeout(() => this.setState({loading: false, meetups: data.meetups}), 2000);
	};

	render() {
		if (this.state.loading) {
			return (
				<View style={styles.container}>
					<ActivityIndicator size='large' />
				</View>
			)
		}
		return (
			<View style={styles.container}>
				<Text>There we go. Hello React Native App!</Text>
				{this.state.meetups.map((meetup, index) => (
					<Text key={index}>{meetup.title}</Text>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
