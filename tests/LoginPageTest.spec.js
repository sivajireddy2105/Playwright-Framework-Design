import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

import data from '../testData/data.json'

let loginPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)
})

test.describe('verify the login page', async () => {

    test('Valid credentials', async () => {
        //Valid credentials
        await loginPage.validLogin(data.userName, data.password)
        expect(await loginPage.homePageIdentifier).toBeVisible({ timeout: 10000 })
        console.log(`${await loginPage.homePageIdentifier.innerText()}`)
    })

    test('Invalid credentials', async () => {
        //Invalid credentials
        await loginPage.invalidLogin(data.userName, data.inValidPassword)
        expect(await loginPage.errorMessage).toHaveText(' Incorrect email or password. ')
        console.log(`${await loginPage.errorMessage.innerText()}`)
    })
})