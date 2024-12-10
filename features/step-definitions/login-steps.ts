import { Then, When } from '@wdio/cucumber-framework';
import { EXPECTED_LOCATORS } from '../../src/util/locators';

When(
	'I login with {word} and {word}',
	async (username: string, password: string) => {
		await browser.VerifyElementExisting(EXPECTED_LOCATORS.usernameField);
		await browser.VerifyElementExisting(EXPECTED_LOCATORS.passwordField);
		await browser.TypeText(EXPECTED_LOCATORS.usernameField, username);
		await browser.TypeText(EXPECTED_LOCATORS.passwordField, password);
		await browser.ClickOnElement(EXPECTED_LOCATORS.loginButton);
	}
);

Then(
	'I should see a flash message saying {string}',
	async (message: string) => {
		await browser.VerifyElementExisting(EXPECTED_LOCATORS.flashMessage);
		await browser.VerifyElementContainsText(
			EXPECTED_LOCATORS.flashMessage,
			message
		);
	}
);
