# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> verify the login page >> Invalid credentials
- Location: tests\LoginPageTest.spec.js:20:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('alert', { name: ' Incorrect email or password. ' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]: Shivaji2105@
            - generic [ref=e37]: "*Enter Valid Email"
          - generic [ref=e39]:
            - generic [ref=e40]: Password
            - textbox "enter your passsword" [ref=e41]: iam.reddy0508@gmail.com
          - button "Login" [active] [ref=e42] [cursor=pointer]
        - link "Forgot password?" [ref=e43] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e44] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e45]:
    - heading "Why People Choose Us?" [level=1] [ref=e48]
    - generic [ref=e49]:
      - generic [ref=e50]:
        - generic [ref=e51]: 
        - generic [ref=e53]:
          - heading "3546540" [level=1]
          - paragraph [ref=e54]: Successfull Orders
      - generic [ref=e55]:
        - generic [ref=e56]: 
        - generic [ref=e58]:
          - heading "37653" [level=1]
          - paragraph [ref=e59]: Customers
      - generic [ref=e60]:
        - generic [ref=e61]: 
        - generic [ref=e63]:
          - heading "3243" [level=1]
          - paragraph [ref=e64]: Sellers
    - generic [ref=e65]:
      - generic [ref=e66]:
        - generic [ref=e67]: 
        - generic [ref=e69]:
          - heading "4500+" [level=1]
          - paragraph [ref=e70]: Daily Orders
      - generic [ref=e71]:
        - generic [ref=e72]: 
        - generic [ref=e74]:
          - heading "500+" [level=1]
          - paragraph [ref=e75]: Daily New Customer Joining
```

# Test source

```ts
  1  | export class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.userName = page.getByPlaceholder('email@example.com')
  5  |         this.password = page.getByPlaceholder('enter your passsword')
  6  |         this.loginButton = page.locator('input#login')
  7  |         this.errorMessage = page.getByRole('alert', { name: ' Incorrect email or password. ' })
  8  |         this.homePageIdentifier = page.getByText(' User can only see maximum 9 products on a page', { exact: true })
  9  |     }
  10 | 
  11 |     async launchURL() {
  12 |         await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login')
  13 |     }
  14 | 
  15 |     async validLogin(userName, passsword){
  16 |         await this.userName.fill(userName)
  17 |         await this.password.fill(passsword)
  18 |         await this.loginButton.click()
  19 |         await this.homePageIdentifier.waitFor({state: 'visible'})
  20 |     }
  21 | 
  22 |     async invalidLogin(userName, passsword){
  23 |         await this.userName.fill(userName)
  24 |         await this.password.fill(passsword)
  25 |         await this.loginButton.click()
> 26 |         await this.errorMessage.waitFor({state: 'visible'})
     |                                 ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  27 |     }
  28 | }
```