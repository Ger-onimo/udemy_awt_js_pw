export class Navigation {
  constructor(page) {
    this.page = page
    
    this.basketCounter = page.locator('[data-qa="header-basket-count"]')
    this.checkoutLink = page.getByRole('link', { name: 'Checkout' })
  }

  // Method to check the basket count number prior to adding items
  getBasketCount = async () => {
    await this.basketCounter.waitFor()
    const text = await this.basketCounter.innerText()
// changes the counter text "1" to a number 1
    return parseInt(text, 10)
  }

  // Method to navigate to the Checkout lonk
  goToCheckout = async () => {
    await this.checkoutLink.waitFor()
    await this.checkoutLink.click()
    await this.page.waitForURL("/basket")
  }

}