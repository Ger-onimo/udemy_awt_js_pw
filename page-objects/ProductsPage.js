import { expect } from "@playwright/test"
import { Navigation } from "./Navigation.js"

export class ProductsPage {
  constructor (page) {
    this.page = page
// page locators added to the constructor
    this.addButtons = page.locator('[data-qa="product-button"]')
  }

  // Method to visit the home page
  visit = async () => {
    await this.page.goto("/")
  }

// Method to add products to the basket
// add products to the basket at the nth position in the index - iterates through 
// each addProductToBasket item on the new_user_full_journey.spec.js test
  addProductToBasket = async (index) => {
    const specificAddButton = this.addButtons.nth(index)
    // move this into the constructor: const addButtons = this.page.locator('[data-qa="product-button"]')
    await specificAddButton.waitFor()
    await expect(specificAddButton).toHaveText("Add to Basket")
    // the basket count method is now called from the Navigation class
    const navigation = new Navigation(this.page)
    const basketCountBeforeAdding = await navigation.getBasketCount()
    await specificAddButton.click()
    await expect(specificAddButton).toHaveText("Remove from Basket")
    const basketCountAfterAdding = await navigation.getBasketCount()
    expect (basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding)

  }
}