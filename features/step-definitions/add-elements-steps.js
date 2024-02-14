const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

When("I click on Add Element button", async () => {
    await $('//*[@id="content"]/div/button').click()
});

Then("I should see a new element with Delete button", async () => {
    const el = await $('//*[@id="elements"]/button[1]')
    await expect(el).toBeExisting();
    await expect(el).toHaveText(expect.stringContaining('Delete'))
});