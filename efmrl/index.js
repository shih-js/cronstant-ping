const puppeteer = require('puppeteer');

const BASE_URL = 'https://efmrl.link/tcount';
const iPhone = puppeteer.devices['iPhone 6'];
const efmrl = {
	browser: null,
	page: null,
	initialize: async () => {
		efmrl.browser = await puppeteer.launch({ headless: true });
		efmrl.page = await efmrl.browser.newPage();
		await efmrl.page.emulate(iPhone);
		await efmrl.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
		console.log(`>>> 👋🏼 Visited ${BASE_URL} @ ${new Date()}`);
		await efmrl.browser.close();
	}
};

module.exports = efmrl;
