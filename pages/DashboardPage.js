export class DashboardPage {
    constructor(page) {
        this.page = page
        this.productsList = page.locator('div.card-body') //list of products
        this.addedMessage = page.locator('div#toast-container div.toast-message') //toast message after adding product to cart
        this.cart = page.locator('//button[@routerlink="/dashboard/cart"]') //Click cart button to go to the cart page
        this.myCart = page.locator('//h1[normalize-space()="My Cart"]') //validate the cart heading

        this.cartSection = page.locator('div.cartSection') //cart section in the cart page to check the added products
        this.addedProductsList = page.locator('div.cartSection h3') //added product title in cart page
        this.orderId = page.locator('div p.itemNumber') //order id of the added product in the cart page
        this.addedProductPrice = page.locator('div.prodTotal.cartSection p') //added product price in the cart page
    }

    // method to add a product to the cart based on the product name
    async addProductToCart(productName) {
        const products = await this.productsList.first().waitFor() //wait for the first product to be visible
        const count = await this.productsList.count() //take the count of the products

        for (let i = 0; i < count; i++) {
            const product = this.productsList.nth(i)  //get the product based on the index
            const productText = await product.locator('b').textContent() //extract the product name 

            if (productText?.trim() === productName) { //compare the product name with the given product name
                console.log(`Found: ${productText}`)
                await product.getByRole('button', { name: ' Add To Cart' }).click() //click on the add to cart button if the product name matches
                await this.addedMessage.waitFor({ state: 'visible' }) //wait for the toast message to be visible after adding the product to the cart
                break
            }
        }
    }

    // method to view the product details based on the product name on the product details page
    async viewProductDetails(viewProductName) {
        const products = await this.productsList.first().waitFor()
        const count = await this.productsList.count()

        for (let i = 0; i < count; i++) {
            const product = this.productsList.nth(i)
            const productText = await product.locator('b').textContent()
            if (productText?.trim() === viewProductName) {
                console.log(`Found: ${productText}`)
                await product.getByRole('button', { name: ' View' }).click() // click on the View button to go to the product details page if the product name matches
                break
            }
        }
    }

    // method to verify the product details page based on the product name
    async verifyProductDetailsPage(viewProductName) {
        this.productDetailsName = this.page.locator('div h2') // get the product name from the product details page
        // this.productDetailsName = await productDetailsName  // store the product name in a variable to use it later in the test  
        console.log(`Product Details Page: ${await this.productDetailsName.innerText()}`)
        await this.page.getByRole('button', { name: 'Add to Cart' }).click() // click on the Add to cart button on the product details page to add the product to the cart
        await this.addedMessage.waitFor({ state: 'visible' }) //wait for the toast message to be visible after adding the product to the cart
    }

    // method to go to the cart pages
    async goToCart() {
        await this.cart.click() // click on the cart button to go to the cart page
    }

    // method to verify the added products in the cart page based on the product name and view product name
    async verifyCart(productName, viewproductName) {
        //productName is the product added from the dashboard page, and 
        // viewproductName is the product added from the product details page

        const addedProducts = await this.addedProductsList.first().waitFor() // wait for the first added product to be visible in the cart page
        const count = await this.addedProductsList.count()

        for (let i = 0; i < count; i++) {
            const addedProduct = this.addedProductsList.nth(i)
            const addedProductText = await addedProduct.textContent()

            if (addedProductText?.trim() === productName || addedProductText?.trim() === viewproductName) { // check if the added product name matches either the product name or the view product name
                console.log(`Found in cart: ${addedProductText}`) // log the added product name in the cart page
            }
        }
    }

    // method to get the order details of the added products in the cart page based on the product name
    async getOrderDetails() {
        const productSection = await this.cartSection.filter({ hasText: productName }).waitFor() // wait for the product section to be visible in the cart page based on the product name
        await this.myCart.waitFor({ state: 'visible' }) // wait for the cart heading to be visible in the cart page
        await this.orderId.waitFor({ state: 'visible' }) // wait for the order id to be visible in the cart page
    }
}