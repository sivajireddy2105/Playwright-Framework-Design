# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:20:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - button " Cart 1" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
            - generic [ref=e22]: "1"
        - listitem [ref=e23] [cursor=pointer]:
          - button "Sign Out" [ref=e24]:
            - generic [ref=e25]: 
            - text: Sign Out
    - generic [ref=e29]:
      - link "Continue Shopping❯" [ref=e30] [cursor=pointer]:
        - /url: "#/dashboard"
      - generic [ref=e31]:
        - heading "iphone 13 pro" [level=2] [ref=e32]
        - heading "$ 55000" [level=3] [ref=e33]
        - button "Add to Cart" [ref=e35] [cursor=pointer]
        - generic [ref=e36]:
          - heading "product details" [level=6] [ref=e37]
          - paragraph [ref=e38]: Apple phone
        - generic [ref=e39]:
          - heading "Share It" [level=6] [ref=e40]
          - list [ref=e42]:
            - listitem [ref=e43]:
              - generic [ref=e44]: 
            - listitem [ref=e46]:
              - generic [ref=e47]: 
            - listitem [ref=e49]:
              - generic [ref=e50]: 
            - listitem [ref=e52]:
              - generic [ref=e53]: 
            - listitem [ref=e55]:
              - generic [ref=e56]: 
  - alert "Product Added To Cart" [ref=e59]
```

# Test source

```ts
  1  | export class DashboardPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.productsList = page.locator('div.card-body')
  5  |         this.addedMessage = page.locator('div#toast-container div.toast-message')
  6  |         this.cart = page.locator('//button[@routerlink="/dashboard/cart"]')
  7  |         this.myCart = page.locator('//h1[normalize-space()="My Cart"]')
  8  |         this.addedProductsList = page.locator('div.cartSection h3')
  9  |         this.orderId = page.locator('div p.itemNumber')
  10 |         this.addedProductPrice = page.locator('div.prodTotal.cartSection p')
  11 |     }
  12 | 
  13 |     async addProductToCart(productName) {
  14 |         const products = await this.productsList.first().waitFor()
  15 |         const count = await this.productsList.count()
  16 | 
  17 |         for (let i = 0; i < count; i++) {
  18 |             const product = this.productsList.nth(i)
  19 |             const productText = await product.locator('b').textContent()
  20 | 
  21 |             if (productText?.trim() === productName) {
  22 |                 console.log(`Found: ${productText}`)
  23 |                 await product.getByRole('button', { name: ' Add To Cart' }).click()
  24 |                 await this.addedMessage.waitFor({ state: 'visible' })
  25 |                 break
  26 |             }
  27 |         }
  28 |     }
  29 | 
  30 |     async viewProductDetails(viewProductName){
  31 |         const products = await this.productsList.first().waitFor()
  32 |         const count = await this.productsList.count()
  33 | 
  34 |         for(let i=0; i<count; i++){
  35 |             const product = this.productsList.nth(i)
  36 |             const productText = await product.locator('b').textContent()
  37 |             if(productText?.trim() === viewProductName){
  38 |                 console.log(`Found: ${productText}`)
  39 |                 await product.getByRole('button', {name: ' View'}).click()
  40 |                 break
  41 |             }
  42 |         }
  43 |     }
  44 | 
  45 |     async verifyProductDetailsPage(viewProductName){
  46 |         const productDetailsName = await this.page.locator('div h2').textContent()
> 47 |         await expect(productDetailsName?.trim()).toBe(viewProductName)
     |         ^ ReferenceError: expect is not defined
  48 |         await this.page.getByRole('button', {name: 'Add to Cart'}).click()
  49 |         await this.addedMessage.waitFor({ state: 'visible' })
  50 |     }
  51 | 
  52 |     async goToCart() {
  53 |         await this.cart.click()
  54 |     }
  55 | 
  56 |     async verifyCart(productName, viewproductName) {
  57 |         const addedProducts = await this.addedProductsList.first().waitFor()
  58 |         const count = await this.addedProductsList.count()
  59 | 
  60 |         for(let i=0; i< count; i++){
  61 |             const addedProduct = this.addedProductsList.nth(i)
  62 |             const addedProductText = await addedProduct.textContent()
  63 | 
  64 |             if(addedProductText?.trim() === productName || addedProductText?.trim() === viewproductName){
  65 |                 console.log(`Found in cart: ${addedProductText}`)
  66 |             }
  67 |         }
  68 |         await this.myCart.waitFor({ state: 'visible' })
  69 |         await this.orderId.waitFor({ state: 'visible' })
  70 |     }
  71 | }
```