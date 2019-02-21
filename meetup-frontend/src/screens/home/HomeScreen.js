import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

import {MyMeetupsList} from './components';
import {LoadingScreen} from '../../commons';

import {fetchMyMeetups} from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';

@connect(
	state => ({
		myMeetups: state.home.myMeetups,
	}),
	{fetchMyMeetups}
)

class HomeScreen extends Component {
	componentDidMount() {
		this.props.fetchMyMeetups();
	}

	render() {
		const {
			myMeetups: {
				isFetched,
				data,
				error,
			},
		} = this.props;
		const {navigate} = this.props.navigation;
		if (!isFetched) {
			return <LoadingScreen />;
		} else if (error.on) {
			return (
				<View>
					<Text>{error.message}</Text>
				</View>
			);
		}
		return (
			<Container style={styles.root}>
				<Header transparent style={{backgroundColor: Colors.$redColor}}>
					<Left />
					<Body>
						<Title>My Meetups</Title>
					</Body>
					<Right>
						<View>
							<Button transparent onPress={() => navigate('CreateMeetup')}>
								<Icon name='md-add-circle' style={{fontSize: 30, color: Colors.$whiteColor}} />
							</Button>
						</View>
					</Right>
				</Header>
				<Content>
					<View style={styles.bottomContainer}>
						<MyMeetupsList meetups={data} />
					</View>
				</Content>
				<Footer>
					<FooterTab>
						<Button full>
							<Text>Footer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default HomeScreen;
