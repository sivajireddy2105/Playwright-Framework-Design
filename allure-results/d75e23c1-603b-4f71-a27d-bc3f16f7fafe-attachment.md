# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:15:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('div.toast-bottom-right.toast-container')
Expected: " Product Added To Cart "
Received: " No Product in Your Cart  Login Successfully "

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('div.toast-bottom-right.toast-container')
    3 × locator resolved to <div id="toast-container" class="toast-bottom-right toast-container">…</div>
      - unexpected value " Login Successfully "
    - locator resolved to <div id="toast-container" class="toast-bottom-right toast-container">…</div>
    - unexpected value " No Product in Your Cart  Login Successfully "
  - Test ended.

```

```yaml
- alert "No Product in Your Cart"
- text: Login Successfully
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { DashboardPage } from '../pages/DashboardPage'
  3  | import { LoginPage } from '../pages/LoginPage'
  4  | 
  5  | let loginPage
  6  | let dashboardPage
  7  | 
  8  | test.beforeEach(async ({ page }) => {
  9  |     dashboardPage = new DashboardPage(page)
  10 |     loginPage = new LoginPage(page)
  11 |     loginPage.launchURL()
  12 |     loginPage.validLogin('iam.reddy0508@gmail.com', 'Shivaji2105@')
  13 | })
  14 | 
  15 | test('Add a product to cart', async ({ page }) => {
  16 | 
  17 |     await dashboardPage.addProductToCart('iphone 13 pro')
  18 |     // await dashboardPage.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash')
> 19 |     expect(await dashboardPage.addedMessage).toHaveText(' Product Added To Cart ')
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  20 |     console.log(`${await dashboardPage.addedMessage.innerText()}`)
  21 | 
  22 |     await dashboardPage.goToCart()
  23 |     expect(await dashboardPage.myCart).toHaveText('My Cart')
  24 | })
```