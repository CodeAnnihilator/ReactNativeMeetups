import axios from 'axios';

const host = '10.0.1.37';

axios.defaults.baseURL = `http://${host}:3000/api`;

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
