import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

When("I login with {word} and {word}", async (username: string, password: string) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message: string) => {
    const el = await $('#flash')
    await expect(el).toBeExisting();
    await expect(el).toHaveText(expect.stringContaining(message))
});