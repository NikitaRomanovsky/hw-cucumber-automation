import { Then, When } from '@wdio/cucumber-framework';
import { EXPECTED_LOCATORS } from '../../src/util/locators';

When('I hover on user {int}', async (id: number) => {
	await browser.VerifyElementExisting(EXPECTED_LOCATORS.userImage + `[${id}]`);
	await browser.HoverMouseOnElement(EXPECTED_LOCATORS.userImage + `[${id}]`);
});

Then('I should see its name: user{int}', async (id: number) => {
	await browser.VerifyElementExisting(
		EXPECTED_LOCATORS.userPersonalInfo + `[${id}]`
	);
	await browser.VerifyElementHasText(
		EXPECTED_LOCATORS.userPersonalInfo + `[${id}]`,
		`name: user${id}`
	);
});

Then('I should see view profile link for user {int}', async (id: number) => {
	await browser.VerifyElementExisting(
		EXPECTED_LOCATORS.userViewProfileLink + `[${id}]`
	);
	await browser.VerifyElementHasText(
		EXPECTED_LOCATORS.userViewProfileLink + `[${id}]`,
		'View profile'
	);
	await browser.VerifyTextElementIsLink(
		EXPECTED_LOCATORS.userViewProfileLink + `[${id}]`,
		`/users/${id}`
	);
});
