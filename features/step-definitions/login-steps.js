const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message) => {
    const el = await $('#flash')
    await expect(el).toBeExisting();
    await expect(el).toHaveText(expect.stringContaining(message))
});