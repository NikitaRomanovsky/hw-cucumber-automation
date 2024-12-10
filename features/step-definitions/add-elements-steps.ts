import { Then, When } from '@wdio/cucumber-framework';
import { EXPECTED_LOCATORS } from '../../src/util/locators';

When('I click on Add Element button', async () => {
	await browser.VerifyElementExisting(EXPECTED_LOCATORS.addElementButton);
	await browser.ClickOnElement(EXPECTED_LOCATORS.addElementButton);
	await browser.ClickOnElement(EXPECTED_LOCATORS.addElementButton);
});

Then('I should see new elements with Delete button', async () => {
	await browser.VerifyElementExisting(
		EXPECTED_LOCATORS.deleteElementButton + '[1]'
	);
	await browser.VerifyElementExisting(
		EXPECTED_LOCATORS.deleteElementButton + '[2]'
	);
	await browser.VerifyElementHasText(
		EXPECTED_LOCATORS.deleteElementButton + '[1]',
		'Delete'
	);
	await browser.VerifyElementHasText(
		EXPECTED_LOCATORS.deleteElementButton + '[2]',
		'Delete'
	);
});
