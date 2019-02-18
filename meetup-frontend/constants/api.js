import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5c6678d08fb2612915b872bd';

class MeetupApi {
	constructor() {
		this.groupId = fakeGroupId;
		this.path = `/groups/${this.groupId}/meetups`;
	}

	async fetchGroupMeetups() {
		const {data} = await axios.get(this.path);
		return data.meetups;
	}
}

export {
	MeetupApi,
};
