# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:16:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('div.card-body').getByRole('button', { name: ' Add To Cart' }) resolved to 3 elements:
    1) <button _ngcontent-ybu-c39="" class="btn w-10 rounded">…</button> aka getByRole('button', { name: ' Add To Cart' }).first()
    2) <button _ngcontent-ybu-c39="" class="btn w-10 rounded">…</button> aka getByRole('button', { name: ' Add To Cart' }).nth(1)
    ...

Call log:
  - waiting for locator('div.card-body').getByRole('button', { name: ' Add To Cart' })

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
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - text:    
    - generic [ref=e25]:
      - paragraph [ref=e26]: Home | Search
      - heading "Filters" [level=4] [ref=e28]
      - generic [ref=e29]:
        - textbox "search" [ref=e31]
        - generic [ref=e32]:
          - heading "Price Range" [level=6] [ref=e33]
          - generic [ref=e34]:
            - textbox "Min Price" [ref=e36]
            - textbox "Max Price" [ref=e38]
        - generic [ref=e39]:
          - heading "Categories" [level=6] [ref=e40]
          - generic [ref=e41]: 
          - generic [ref=e43]:
            - checkbox [ref=e44]
            - generic [ref=e45]: fashion
          - generic [ref=e46]:
            - checkbox [ref=e47]
            - generic [ref=e48]: electronics
          - generic [ref=e49]:
            - checkbox [ref=e50]
            - generic [ref=e51]: household
        - generic [ref=e52]:
          - heading "Sub Categories" [level=6] [ref=e53]
          - generic [ref=e54]: 
          - generic [ref=e56]:
            - checkbox [ref=e57]
            - generic [ref=e58]: t-shirts
          - generic [ref=e59]:
            - checkbox [ref=e60]
            - generic [ref=e61]: shirts
          - generic [ref=e62]:
            - checkbox [ref=e63]
            - generic [ref=e64]: shoes
          - generic [ref=e65]:
            - checkbox [ref=e66]
            - generic [ref=e67]: mobiles
          - generic [ref=e68]:
            - checkbox [ref=e69]
            - generic [ref=e70]: laptops
        - generic [ref=e71]:
          - heading "Search For" [level=6] [ref=e72]
          - generic [ref=e73]: 
          - generic [ref=e75]:
            - checkbox [ref=e76]
            - generic [ref=e77]: men
          - generic [ref=e78]:
            - checkbox [ref=e79]
            - generic [ref=e80]: women
    - generic [ref=e81]:
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e84]: Showing 3 results |
          - generic [ref=e85]: User can only see maximum 9 products on a page
        - generic [ref=e86]:
          - generic [ref=e90]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
            - generic [ref=e92]: $ 11500
            - button "View" [ref=e94] [cursor=pointer]:
              - generic [ref=e95]: 
              - text: View
            - button " Add To Cart" [ref=e96] [cursor=pointer]:
              - generic [ref=e97]: 
              - text: Add To Cart
          - generic [ref=e101]:
            - heading "ZARA COAT 3" [level=5] [ref=e102]
            - generic [ref=e103]: $ 11500
            - button "View" [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: 
              - text: View
            - button " Add To Cart" [ref=e107] [cursor=pointer]:
              - generic [ref=e108]: 
              - text: Add To Cart
          - generic [ref=e112]:
            - heading "iphone 13 pro" [level=5] [ref=e113]
            - generic [ref=e114]: $ 55000
            - button "View" [ref=e116] [cursor=pointer]:
              - generic [ref=e117]: 
              - text: View
            - button " Add To Cart" [ref=e118] [cursor=pointer]:
              - generic [ref=e119]: 
              - text: Add To Cart
      - list "Pagination" [ref=e124]:
        - listitem [ref=e125]:
          - text: «
          - generic [ref=e126]:
            - text: Previous
            - generic [ref=e127]: page
        - listitem [ref=e128]:
          - generic [ref=e129]: You're on page
          - text: "1"
        - listitem [ref=e130]:
          - generic [ref=e131]:
            - text: Next
            - generic [ref=e132]: page
          - text: »
    - generic [ref=e133]: Design and Developed By - Kunal Sharma
  - generic "Login Successfully" [ref=e135]
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
  8  |         this.orderId = page.locator('div p.itemNumber')
  9  |         this.addedProductPrice = page.locator('div.prodTotal.cartSection p')
  10 |     }
  11 | 
  12 |     async addProductToCart(productName) {
  13 |         const products = await this.productsList.first().waitFor()
  14 |         const count = await this.productsList.count()
  15 | 
  16 |         for (let i = 0; i < count; i++) {
  17 |             const product = this.productsList.nth(i)
  18 |             const productText = await product.locator('b').textContent()
  19 | 
  20 |             if (productText?.trim() === productName) {
  21 |                 console.log(`Found: ${productText}`)
> 22 |                 await this.productsList.getByRole('button', { name: ' Add To Cart' }).click()
     |                                                                                       ^ Error: locator.click: Error: strict mode violation: locator('div.card-body').getByRole('button', { name: ' Add To Cart' }) resolved to 3 elements:
  23 |                 await this.addedMessage.waitFor({ state: 'visible' })
  24 |                 break
  25 |             }
  26 |         }
  27 |     }
  28 | 
  29 |     async goToCart() {
  30 |         await this.cart.click()
  31 |         await this.myCart.waitFor({ state: 'visible' })
  32 |         await this.orderId.waitFor({ state: 'visible' })
  33 |     }
  34 | }
```