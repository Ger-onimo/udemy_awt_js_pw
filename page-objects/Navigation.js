export class Navigation {
  constructor(page) {
    this.page = page
    
    this.basketCounter = page.locator('[data-qa="header-basket-count"]')

  }

  // method checks the basket count prior to adding items
  getBasketCount = async () => {
    await this.basketCounter.waitFor()
    const text = await this.basketCounter.innerText()
// changes the counter text "1" to a number 1
    return parseInt(text, 10)
  }

}