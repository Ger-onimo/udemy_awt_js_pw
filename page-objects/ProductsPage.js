import { expect } from "@playwright/test"

export class ProductsPage {
  constructor (page) {
    this.page = page
// page locators added to the constructor
    this.addButtons = page.locator('[data-qa="product-button"]')
  }

  // methods called to run the test steps
  visit = async () => {
    await this.page.goto("/")
  }
// add products to the basket at the nth position in the index - iterates through 
// each addProductToBasket item on the new_user_full_journey.spec.js test
  addProductToBasket = async (index) => {
    const specificAddButton = this.addButtons.nth(index)
    // move this into the constructor: const addButtons = this.page.locator('[data-qa="product-button"]')
    await specificAddButton.waitFor()
    await expect(specificAddButton).toHaveText("Add to Basket")
    await specificAddButton.click()
    await expect(specificAddButton).toHaveText("Remove from Basket")

    

  }
}