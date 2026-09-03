# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div p.itemNumber') to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
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
  10 |     }
  11 | 
  12 |     async addProductToCart(productName) {
  13 |         const count = await this.productsList.count()
  14 | 
  15 |         for (let i = 0; i < count; i++) {
  16 |             const product = await this.productsList.nth(i)
  17 |             const productText =await product.locator('b').innerText()   
  18 | 
  19 |             if (productText?.trim().includes(productName)) {
  20 |                 await product.locator('button.btn.w-10.rounded').click()
  21 |                 break
  22 |             }
  23 |         }
  24 |         // await this.addedMessage.waitFor({state: 'visible'})
  25 |     }
  26 | 
  27 |     async goToCart(){
  28 |         await this.cart.click()
  29 |         await this.myCart.waitFor({state: 'visible'})
> 30 |         await this.orderId.waitFor({state: 'visible'})
     |                            ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  31 |     }
  32 | }
```