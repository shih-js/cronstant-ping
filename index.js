const cron = require('node-cron');
const nu = require('./nusentiment/');
const efmrl = require('./efmrl/');

cron.schedule('0,30 8-22 * * *', async () => {
	console.log('>>> 🤖 Running automated tasks...');
	await nu.initialize();
	await nu.login();
	await efmrl.initialize();
	console.log(`>>> ✅ Tasks completed.`);
});
