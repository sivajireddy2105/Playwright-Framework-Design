# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:9:5

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
  1  | import {test, expect} from '@playwright/test'
  2  | import { DashboardPage } from '../pages/DashboardPage'
  3  | import { LoginPage } from '../pages/LoginPage'
  4  | 
  5  | let loginPage
  6  | let dashboardPage
  7  | 
  8  | 
  9  | test('Add a product to cart', async({page})=>{
  10 |     dashboardPage = new DashboardPage(page)
  11 |     loginPage = new LoginPage(page)
  12 |     loginPage.launchURL()
  13 |     loginPage.validLogin('iam.reddy0508@gmail.com', 'Shivaji2105@')
  14 | 
  15 |     await dashboardPage.addProductToCart('iphone 13 pro')
> 16 |     expect(await dashboardPage.addedMessage).toHaveText(' Product Added To Cart ')
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  17 |     console.log(`${await dashboardPage.addedMessage.innerText()}`)
  18 | 
  19 |     await dashboardPage.goToCart()
  20 |     expect(await dashboardPage.myCart).toHaveText('My Cart')
  21 | })
```