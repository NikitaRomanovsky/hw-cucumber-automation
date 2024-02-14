const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

When('I click on {word} box', async (state) => {
    if(state === 'unchecked') {
        await $('//*[@id="checkboxes"]/input[1]').click()
    } else if (state === 'checked') {
        await $('//*[@id="checkboxes"]/input[1]').doubleClick()
    }
})

Then('I should see checkbox to be {word}', async (status) => {
    if(status === 'checkmarked') {
        const element = await $('//*[@id="checkboxes"]/input[1]').isSelected()
        await expect(element).toBeTruthy()
    } else if (status === 'uncheckmarked') {
       const element = await $('//*[@id="checkboxes"]/input[1]').isSelected()
       await expect(element).toBeFalsy()
    }
})