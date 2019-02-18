import mongoose, {Schema} from 'mongoose';

const GroupSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		minLength: [5, 'Name must be 5 characters long'],
	},
	description: {
		type: String,
		required: true,
		minLength: [5, 'Name must be 5 characters long'],
	},
	category: {
		type: String,
	},
	meetups: [{
		type: Schema.Types.ObjectId,
		ref: 'Meetup',
	}],
}, {timestamps: true});

GroupSchema.statics.addMeetup = async function (id, args) {
	const Meetup = mongoose.model('Meetup');
	const meetup = await new Meetup({...args, group: id});

	await this.findByIdAndUpdate(id, {$push: {meetups: meetup.id}});

	return {
		meetup: await meetup.save(),
	};
};

export default mongoose.model('Group', GroupSchema);
