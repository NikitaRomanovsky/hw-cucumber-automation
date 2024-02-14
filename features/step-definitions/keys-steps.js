const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

When('I enter {string} into input field', async (word) => {
  await $('//*[@id="target"]').click();
  browser.keys(word);
});

Then('I should see a last pressed key - {word}', async (key) => {
  const element = await $('//*[@id="result"]');
  await expect(element).toBeExisting();
  await expect(element).toHaveText(expect.stringContaining(key));
});
