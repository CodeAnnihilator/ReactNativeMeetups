import {
	FETCH_MY_MEETUPS,
} from './actions';

const initialState = {
	myMeetups: {
		data: [],
		isFetched: false,
		error: {
			on: false,
			message: null,
		},
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
	case `${FETCH_MY_MEETUPS}_PENDING`:
		return initialState;
	case `${FETCH_MY_MEETUPS}_FULFILLED`:
		return {
			myMeetups: {
				data: action.payload,
				isFetched: true,
				error: {
					on: false,
					message: null,
				},
			},
		};
	case `${FETCH_MY_MEETUPS}_REJECTED`:
		return {
			myMeetups: {
				data: [],
				isFetched: true,
				error: {
					on: true,
					message: 'Error when fetching my meetups',
				},
			},
		};
	default:
		return state;
	}
};
