import express from 'express';

import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares'
import {MeetupRoutes} from './modules';

const app = express();

dbConfig();
middlewaresConfig(app);

app.use('/api', [MeetupRoutes]);

const PORT = process.env.port || 3000;

app.listen(PORT, err => {
	if (err) {
		console.log(err);
	} else {
		console.log(`App listen to port: ${PORT}`)
	}
});