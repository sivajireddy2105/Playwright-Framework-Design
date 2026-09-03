import { test, expect } from '@playwright/test'

test('add to cart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')

    await page.getByPlaceholder('email@example.com').fill('iam.reddy0508@gmail.com')
    await page.getByPlaceholder('enter your passsword').fill('Shivaji2105@')
    await page.locator('input#login').click()


    const products = page.locator('div.card-body')
    await products.first().waitFor()

    for (let i = 0; i < await products.count(); i++) {
        const product = products.nth(i)
        const producttext = await product.locator('b').textContent()

        if (producttext?.trim() === 'ZARA COAT 3') {
            console.log(`Found: ${producttext}`)
            await product.getByRole('button', { name: ' Add To Cart' }).click()

            const toastmsg = await page.locator('#toast-container')
            await expect(toastmsg).toContainText(' Product Added To Cart ')
            console.log(`Success: ${await toastmsg.innerText()}`)

            break
        }
    }

    // const productName = (await product.locator('b').textContent()).trim();
    // const toast = page.locator('div[role="alert"][aria-label="Product Added To Cart"]');


    await page.locator('//button[@routerlink="/dashboard/cart"]').click()
    await page.pause()
})