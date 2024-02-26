import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

When("I click on Add Element button", async () => {
    await $('//*[@id="content"]/div/button').click()
});

Then("I should see a new element with Delete button", async () => {
    const el = await $('//*[@id="elements"]/button[1]')
    await expect(el).toBeExisting();
    await expect(el).toHaveText(expect.stringContaining('Delete'))
});