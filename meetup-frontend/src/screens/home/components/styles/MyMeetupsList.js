import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	root: {
		flex: 1,
	},
	titleContainer: {
		flex: 0.1,
		padding: 5,
	},
	contentContainer: {
		flex: 1,
	},
	title: {
		color: '$whiteColor',
		fontSize: 25,
		fontFamily: 'montserrat',
	},
	meetupCard: {
		height: 200,
		width: 175,
		marginHorizontal: 5,
		backgroundColor: '$redColor',
	},
	meetupCardTopContainer: {
		flex: 1,
		position: 'relative',
	},
	meetupCardTitle: {
		position: 'absolute',
		color: '$whiteColor',
		top: 5,
		fontFamily: 'montserratBold',
	},
	meetupCardBottomContainer: {
		flex: 0.4,
		backgroundColor: '$whiteColor',
		justifyContent: 'center',
		paddingHorizontal: 5,
	},
	meetupCardMetaName: {
		fontSize: 15,
		fontFamily: 'montserrat',
	},
	meetupsCardMetaDate: {
		fontSize: 13,
		fontFamily: 'montserratLight',
	},
});

export default styles;
