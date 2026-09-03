# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.js >> Add a product to cart
- Location: tests\dashboardPageTest.spec.js:16:5

# Error details

```
TypeError: dashboardPage.pause is not a function
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
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "My Cart" [level=1] [ref=e27]
        - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
      - heading "No Products in Your Cart !" [level=1] [ref=e30]
  - generic:
    - generic:
      - alert "No Product in Your Cart" [ref=e33]
      - generic "Login Successfully" [ref=e35]
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
  11 | 
  12 |     await loginPage.launchURL()
  13 |     await loginPage.validLogin('iam.reddy0508@gmail.com', 'Shivaji2105@')
  14 | })
  15 | 
  16 | test('Add a product to cart', async () => {
  17 | 
  18 |     await dashboardPage.addProductToCart('iphone 13 pro')
  19 |     // await expect(dashboardPage.addedMessage).toHaveText(' Product Added To Cart ')
  20 |     // console.log(`${await dashboardPage.addedMessage.innerText()}`)
  21 | 
  22 |     await dashboardPage.goToCart()
> 23 |     await dashboardPage.pause()
     |                         ^ TypeError: dashboardPage.pause is not a function
  24 |     await expect(dashboardPage.myCart).toHaveText('My Cart')
  25 | })
```