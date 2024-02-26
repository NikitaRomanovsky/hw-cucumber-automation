import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


When("I click on appeared Delete button", async () => {
    await $('//*[@id="elements"]/button[1]').click()
});


Then("I should not see any created element", async () => {
    let el = await $('//*[@id="elements"]/button[1]').isDisplayed()
    await expect(el).toBeFalsy()
});