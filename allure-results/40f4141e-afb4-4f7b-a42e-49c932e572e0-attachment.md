# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:4:5

# Error details

```
ReferenceError: url is not defined
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | import { DashboardPage } from '../pages/DashboardPage'
  3  | 
  4  | test('Add a product to cart', async({page})=>{
  5  |     const dashboardPage = new DashboardPage(page)
  6  | 
> 7  |     await dashboardPage.gotoURL(url)
     |                                 ^ ReferenceError: url is not defined
  8  |     await dashboardPage.addProductToCart('iphone 13 pro')
  9  |     expect(await dashboardPage.addedMessage).toHaveText(' Product Added To Cart ')
  10 |     console.log(`${await dashboardPage.addedMessage.innerText()}`)
  11 | 
  12 |     await dashboardPage.goToCart()
  13 |     expect(await dashboardPage.myCart).toHaveText('My Cart')
  14 | })
```