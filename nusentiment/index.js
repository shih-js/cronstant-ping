const puppeteer = require('puppeteer');

const BASE_URL = 'https://nusentiment.app';
const iPhone = puppeteer.devices['iPhone 6'];
const nu = {
	browser: null,
	page: null,
	initialize: async () => {
		nu.browser = await puppeteer.launch({ headless: true });
		nu.page = await nu.browser.newPage();
		await nu.page.emulate(iPhone);
		await nu.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
		console.log(`>>> 👋🏼 Visited ${BASE_URL} @ ${new Date()}`);
		// await nu.browser.close();
	},
	login: async () => {
		console.log(`>>> 🐈 Begin login process.`);
		await nu.page.click('nav > .login-menu > .link');
		await nu.page.waitFor(2000);
		await nu.page.click('.random-cat');
		await nu.page.waitFor(1000);
		await nu.page.click('.signin button');
		await nu.page.waitFor(30000);
		// await nu.page.waitForNavigation({ waitUntil: 'networkidle2' });
		await nu.browser.close();
	}
};

module.exports = nu;
