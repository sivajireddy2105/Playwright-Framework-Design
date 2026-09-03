# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:16:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('div#toast-container div.toast-message') to be visible

```

# Test source

```ts
  1  | export class DashboardPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.productsList = page.locator('div.card-body')
  5  |         // this.addToCart = page.locator('button.btn.w-10.rounded')
  6  |         this.addedMessage = page.locator('div#toast-container div.toast-message')
  7  |         this.cart = page.locator('//button[@routerlink="/dashboard/cart"]')
  8  |         this.myCart = page.locator('//h1[normalize-space()="My Cart"]')
  9  |         this.orderId = page.locator('div p.itemNumber')
  10 |         this.addedProductPrice = page.locator('div.prodTotal.cartSection p')
  11 |     }
  12 | 
  13 |     async addProductToCart(productName) {
  14 |         const count = await this.productsList.count()
  15 | 
  16 |         for (let i = 0; i < count; i++) {
  17 |             const productText = await this.productsList.nth(i).locator('b').innerText()    
  18 | 
  19 |             if (productText?.trim().includes(productName)) {
  20 |                 await this.productsList.getByRole('button', {name: ' Add To Cart'}).click()
  21 |                 break
  22 |             }
  23 |         }
> 24 |         // await this.addedMessage.waitFor({state: 'visible'})
     |                                 ^ Error: locator.waitFor: Target page, context or browser has been closed
  25 |     }
  26 | 
  27 |     async goToCart(){
  28 |         await this.cart.click()
  29 |         await this.myCart.waitFor({state: 'visible'})
  30 |         await this.orderId.waitFor({state: 'visible'})
  31 |     }
  32 | }
```