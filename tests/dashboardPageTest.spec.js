import { test, expect } from '@playwright/test'
import { DashboardPage } from '../pages/DashboardPage'
import { LoginPage } from '../pages/LoginPage'

import data from '../testData/data.json'

// const data = JSON.parse(JSON.stringify(require('../testData/data.json')))

let loginPage
let dashboardPage

test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page)
    loginPage = new LoginPage(page)

    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.userName, data.password)
})

test('Add a product to cart', async () => {

    await dashboardPage.addProductToCart(data.productName)

    await expect(dashboardPage.addedMessage).toHaveText(' Product Added To Cart ')
    console.log(`Success: ${await dashboardPage.addedMessage.innerText()}`)

    await dashboardPage.viewProductDetails(data.viewProductName)

    await dashboardPage.verifyProductDetailsPage(data.viewProductName)
    await expect(dashboardPage.productDetailsName).toHaveText(data.viewProductName)

    await dashboardPage.goToCart()

    await dashboardPage.verifyCart()

    await expect(dashboardPage.myCart).toHaveText('My Cart')

    console.log(`${await dashboardPage.orderId.first().innerText()}`)
    
    console.log(`${await dashboardPage.addedProductPrice.first().innerText()}`)
})