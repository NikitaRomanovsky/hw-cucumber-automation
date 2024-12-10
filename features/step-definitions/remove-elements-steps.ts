import { Then, When } from '@wdio/cucumber-framework';
import { EXPECTED_LOCATORS } from '../../src/util/locators';

When('I click on appeared Delete button', async () => {
	await browser.ClickOnElement(EXPECTED_LOCATORS.deleteElementButton + '[2]');
	await browser.ClickOnElement(EXPECTED_LOCATORS.deleteElementButton + '[1]');
});

Then('I should not see any created element', async () => {
	await browser.VerifyElementNotExisting(
		EXPECTED_LOCATORS.deleteElementButton + '[1]'
	);
	await browser.VerifyElementNotExisting(
		EXPECTED_LOCATORS.deleteElementButton + '[2]'
	);
});
