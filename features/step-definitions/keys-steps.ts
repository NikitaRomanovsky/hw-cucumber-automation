import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

When('I enter {string} into input field', async (word: string) => {
  await $('//*[@id="target"]').click();
  browser.keys(word);
});

Then('I should see a last pressed key - {word}', async (key: string) => {
  const element = await $('//*[@id="result"]');
  await expect(element).toBeExisting();
  await expect(element).toHaveText(expect.stringContaining(key));
});
