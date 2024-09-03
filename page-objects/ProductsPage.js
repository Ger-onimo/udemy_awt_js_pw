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
    // move this into the constructor
    // const addButtons = this.page.locator('[data-qa="product-button"]')
    await this.addButtons.nth(index).waitFor()
    await this.addButtons.nth(index).click()
  }
}