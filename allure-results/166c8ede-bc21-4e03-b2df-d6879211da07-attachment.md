# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signinPage.spec.js >> Sign in page
- Location: tests\signinPage.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Sign In' }) resolved to 2 elements:
    1) <button id="btn1" type="button" class="btn btn-primary-outline">Sign In</button> aka getByRole('button', { name: 'Sign In', exact: true })
    2) <button id="btn2" type="button" class="btn btn-primary-outline">Skip Sign In</button> aka getByRole('button', { name: 'Skip Sign In' })

Call log:
  - waiting for getByRole('button', { name: 'Sign In' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link [ref=e3] [cursor=pointer]:
      - /url: SignIn.html
      - button "Sign In" [ref=e4]
    - link [ref=e5] [cursor=pointer]:
      - /url: Register.html
      - button "Skip Sign In" [ref=e6]
  - generic [ref=e8]:
    - generic:
      - img "logo" [ref=e10]
      - generic [ref=e11]:
        - textbox "Email id for Sign Up" [active] [ref=e12]
        - link [ref=e14] [cursor=pointer]:
          - /url: Register.html
          - img "logo" [ref=e15]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('Sign in page', async ({page})=>{
  4  |     await page.goto('https://demo.automationtesting.in/Index.html')
  5  | 
  6  |    const signinButton = await page.getByRole('button', {name: 'Sign In'})
> 7  |    await signinButton.click()
     |                       ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Sign In' }) resolved to 2 elements:
  8  | 
  9  |    const url = await page.url()
  10 |    expect(url).toContain('https://demo.automationtesting.in/SignIn.html')
  11 | })
```