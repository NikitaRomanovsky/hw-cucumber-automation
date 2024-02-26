import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


Given("I am on the {string} page", async (page: string) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});