export class LoginPage {
    constructor(page) {
        this.page = page
        this.userName = page.getByPlaceholder('email@example.com')
        this.password = page.getByPlaceholder('enter your passsword')
        this.loginButton = page.locator('input#login')
        this.errorMessage = page.locator('div#toast-container')
        this.homePageIdentifier = page.locator('label.m-2.blink_me')
    }

    async launchURL(url) {
        await this.page.goto(url)
    }

    async validLogin(userName, password){
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.loginButton.click()
        await this.homePageIdentifier.waitFor({state: 'visible'})
    }

    async invalidLogin(userName, inValidPassword){
        await this.userName.fill(userName)
        await this.password.fill(inValidPassword)
        await this.loginButton.click()
        await this.errorMessage.waitFor({state: 'visible'})
    }
}