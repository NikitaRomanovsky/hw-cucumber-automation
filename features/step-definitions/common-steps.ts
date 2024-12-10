import { Given } from '@wdio/cucumber-framework';

Given('I am on the {string} page', async (page: string) => {
	await browser.url(`https://the-internet.herokuapp.com/${page}`);
});
