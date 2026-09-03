export class DashboardPage {
    constructor(page) {
        this.page = page
        this.productsList = page.locator('div.card-body')
        this.addedMessage = page.locator('div#toast-container div.toast-message')
        this.cart = page.locator('//button[@routerlink="/dashboard/cart"]')
        this.myCart = page.locator('//h1[normalize-space()="My Cart"]')

        this.cartSection = page.locator('div.cartSection')
        this.addedProductsList = page.locator('div.cartSection h3')
        this.orderId = page.locator('div p.itemNumber')
        this.addedProductPrice = page.locator('div.prodTotal.cartSection p')
    }

    async addProductToCart(productName) {
        const products = await this.productsList.first().waitFor()
        const count = await this.productsList.count()

        for (let i = 0; i < count; i++) {
            const product = this.productsList.nth(i)
            const productText = await product.locator('b').textContent()

            if (productText?.trim() === productName) {
                console.log(`Found: ${productText}`)
                await product.getByRole('button', { name: ' Add To Cart' }).click()
                await this.addedMessage.waitFor({ state: 'visible' })
                break
            }
        }
    }

    async viewProductDetails(viewProductName){
        const products = await this.productsList.first().waitFor()
        const count = await this.productsList.count()

        for(let i=0; i<count; i++){
            const product = this.productsList.nth(i)
            const productText = await product.locator('b').textContent()
            if(productText?.trim() === viewProductName){
                console.log(`Found: ${productText}`)
                await product.getByRole('button', {name: ' View'}).click()
                break
            }
        }
    }

    async verifyProductDetailsPage(viewProductName){
        const productDetailsName = await this.page.locator('div h2').textContent()
        this.productDetailsName = productDetailsName
        await this.page.getByRole('button', {name: 'Add to Cart'}).click()
        await this.addedMessage.waitFor({ state: 'visible' })
    }

    async goToCart() {
        await this.cart.click()
    }

    async verifyCart(productName, viewproductName) {
        const addedProducts = await this.addedProductsList.first().waitFor()
        const count = await this.addedProductsList.count()

        for(let i=0; i< count; i++){
            const addedProduct = this.addedProductsList.nth(i)
            const addedProductText = await addedProduct.textContent()

            if(addedProductText?.trim() === productName || addedProductText?.trim() === viewproductName){
                console.log(`Found in cart: ${addedProductText}`)
            }
        }
    }

    async getOrderDetails(){
        const productSection = await this.cartSection.filter({hasText: productName}).waitFor()
        await this.myCart.waitFor({ state: 'visible' })
        await this.orderId.waitFor({ state: 'visible' })
    }
}