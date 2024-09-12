import { isDeskTopViewport } from "../utils/isDesktopViewport.js"

export class Navigation {
  constructor(page) {
    this.page = page
    
    this.basketCounter = page.locator('[data-qa="header-basket-count"]')
    this.checkoutLink = page.getByRole('link', { name: 'Checkout' })
    this.mobileBurgerButton = page.locator('[data-qa="burger-button"]')
  }

  // Method to check the basket count number prior to adding items
  getBasketCount = async () => {
    await this.basketCounter.waitFor()
    const text = await this.basketCounter.innerText()
// changes the counter text "1" to a number 1
    return parseInt(text, 10)
  }

  // Method to navigate to the Checkout link
  goToCheckout = async () => {
    // if mobile viewport, first open the burger menu
    // true if Desktop
    // false if Mobile -> reverse false -> !false so it === true
    if (!isDeskTopViewport(this.page)) { // ! Exclamation mark acts like a NOT command
      await this.mobileBurgerButton.waitFor()
      await this.mobileBurgerButton.click()
    }
    await this.checkoutLink.waitFor()
    await this.checkoutLink.click()
    await this.page.waitForURL("/basket")
  }

}