const { Given, When, Then, } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

When('I hover on user {int}', async (id) => {
    await $(`//*[@id="content"]/div/div[${id}]/img`).moveTo()
})

Then('I should see its name: user{int}', async (id) => {
    const name = await $(`//*[@id="content"]/div/div[${id}]/div/h5`)
    await expect(name).toBeExisting();
    await expect(name).toHaveText(expect.stringContaining(`name: user${id}`))
})

Then('I should see view profile link for user {int}', async (id) => {
    const link = await $(`//*[@id="content"]/div/div[${id}]/div/a`)
    await expect(link).toBeExisting();
    await expect(link).toHaveText(expect.stringContaining('View profile'))
})
