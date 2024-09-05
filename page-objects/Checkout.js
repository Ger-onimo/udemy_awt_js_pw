import { expect } from "@playwright/test"

export class Checkout {
  constructor(page) {
    this.page = page

    this.basketCards = page.locator('[data-qa="basket-card"]')
    this.basketItemPrice = page.locator('[data-qa="basket-item-price"]')
    this.basketItemRemoveButton = page.locator('[data-qa="basket-card-remove-item"]')
  }

  removeCheapestProduct = async () => {
    await this.basketCards.first().waitFor()
    const itemsBeforeRemoval = await this.basketCards.count()
    await this.basketItemPrice.first().waitFor()
    const allPriceTexts = await this.basketItemPrice.allInnerTexts()
    const justNumbers = allPriceTexts.map((element) => {
      const withoutDollarSign = element.replace("$", "")
      return parseInt(withoutDollarSign, 10)
    })
    const smallestPrice = Math.min(...justNumbers)
    const smallestPriceIndex = justNumbers.indexOf(smallestPrice)
    const specificRemoveButton = this.basketItemRemoveButton.nth(smallestPriceIndex)
    await specificRemoveButton.waitFor()
    await specificRemoveButton.click()
    await expect(this.basketCards).toHaveCount(itemsBeforeRemoval - 1)
    // await this.page.pause()
  }
}