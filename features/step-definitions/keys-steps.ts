import { Then, When } from '@wdio/cucumber-framework';
import { EXPECTED_LOCATORS } from '../../src/util/locators';

When('I enter {string} into input field', async (word: string) => {
	await browser.VerifyElementExisting(EXPECTED_LOCATORS.inputField);
	await browser.ClickOnElement(EXPECTED_LOCATORS.inputField);
	await browser.TypeText(EXPECTED_LOCATORS.inputField, word);
});

Then('I should see a last pressed key - {word}', async (key: string) => {
	await browser.VerifyElementExisting(EXPECTED_LOCATORS.lastEneteredKeyResult);
	await browser.ClickOnElement(EXPECTED_LOCATORS.lastEneteredKeyResult);
	await browser.VerifyElementHasText(
		EXPECTED_LOCATORS.lastEneteredKeyResult,
		`You entered: ${key}`
	);
});
