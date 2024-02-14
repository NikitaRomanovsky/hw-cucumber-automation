const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

When("I click on appeared Delete button", async () => {
    await $('//*[@id="elements"]/button[1]').click()
});


Then("I should not see any created element", async () => {
    let el = await $('//*[@id="elements"]/button[1]').isDisplayed()
    await expect(el).toBeFalsy()
});