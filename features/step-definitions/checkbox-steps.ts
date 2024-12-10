import { Then, When } from '@wdio/cucumber-framework';
import { EXPECTED_LOCATORS } from '../../src/util/locators';

When('I click on unchecked box', async () => {
	await browser.ClickOnElement(EXPECTED_LOCATORS.checkboxElement + '[1]');
});

When('I click on checked box', async () => {
	await browser.ClickOnElement(EXPECTED_LOCATORS.checkboxElement + '[2]');
});

Then('I should see checkbox to be checkmarked', async () => {
	await browser.VerifyCheckboxIsSelected(
		EXPECTED_LOCATORS.checkboxElement + '[1]'
	);
});

Then('I should see checkbox to be uncheckmarked', async () => {
	await browser.VerifyCheckboxIsNotSelected(
		EXPECTED_LOCATORS.checkboxElement + '[2]'
	);
});
