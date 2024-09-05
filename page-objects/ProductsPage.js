import { expect } from "@playwright/test"
import { Navigation } from "./Navigation.js"

export class ProductsPage {
  constructor (page) {
    this.page = page
// page locators added to the constructor
    this.addButtons = page.locator('[data-qa="product-button"]')
    this.sortDropdown = page.locator('[data-qa="sort-dropdown"]')
    this.productTitle = page.locator('[data-qa="product-title"]')
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

  sortByCheapest = async () => {
    await this.sortDropdown.waitFor()
    // get the order of the products
    await this.productTitle.first().waitFor()
    const productTitleBeforeSorting = await this.productTitle.allInnerTexts()
    await this.sortDropdown.selectOption("price-asc")
    // get order of products
    // expect that these lists are different
    const productTitleAfterSorting = await this.productTitle.allInnerTexts()
    expect(productTitleAfterSorting).not.toEqual(productTitleBeforeSorting)
    
    // await this.page.pause()
  }

}