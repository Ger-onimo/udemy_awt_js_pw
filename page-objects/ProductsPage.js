import { expect } from "@playwright/test"

export class ProductsPage {
  constructor (page) {
    this.page = page
// page locators added to the constructor
    this.addButtons = page.locator('[data-qa="product-button"]')
    this.basketCounter = page.locator('[data-qa="header-basket-count"]')

  }

  // methods called to run the test steps
  visit = async () => {
    await this.page.goto("/")
  }
// checks the basket count prior to adding items
  getBasketCount = async () => {
    await this.basketCounter.waitFor()
    const text = await this.basketCounter.innerText()
// changes the counter text "1" to a number 1
    return parseInt(text, 10)

  }
// add products to the basket at the nth position in the index - iterates through 
// each addProductToBasket item on the new_user_full_journey.spec.js test
  addProductToBasket = async (index) => {
    const specificAddButton = this.addButtons.nth(index)
    // move this into the constructor: const addButtons = this.page.locator('[data-qa="product-button"]')
    await specificAddButton.waitFor()
    await expect(specificAddButton).toHaveText("Add to Basket")
    const basketCountBeforeAdding = await this.getBasketCount()
    await specificAddButton.click()
    await expect(specificAddButton).toHaveText("Remove from Basket")
    const basketCountAfterAdding = await this.getBasketCount()
    expect (basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding)

  }
}