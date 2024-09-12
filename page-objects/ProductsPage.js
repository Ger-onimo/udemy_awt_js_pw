import { expect } from "@playwright/test"
import { Navigation } from "./Navigation.js"
import { isDeskTopViewport } from "../utils/isDesktopViewport.js"

// // Function to determine if the test is on a Desktop viewport
// const isDeskTopViewport = (page) => {
//   const size = page.viewportSize()
//   return size.width >= 600
// // returns true or false

// }

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

    let basketCountBeforeAdding // Uses variable type "let", so that it can be defined in the ifs
    // Only on Desktop viewport - This next line for get BasketCount is now in an if condition set to false
    // isDeskTopViewport function now moved to the utils folder
    if (isDeskTopViewport(this.page)) {
      basketCountBeforeAdding = await navigation.getBasketCount() 
    }
    await specificAddButton.click()
    await expect(specificAddButton).toHaveText("Remove from Basket")

    // Only on Desktop viewport - These next 2 lines for get BasketCount are now in an if condition set to false
    if (isDeskTopViewport(this.page)) {
      const basketCountAfterAdding = await navigation.getBasketCount()
      expect (basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding)
      }

  // await this.page.pause()
  }
}