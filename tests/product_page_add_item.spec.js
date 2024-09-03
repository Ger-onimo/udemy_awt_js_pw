import { test, expect } from "@playwright/test"

test("Product Page Add to Basket", async ({ page }) => {
  // move goto to page-objects
  await page.goto("/")
//  -------------------
  const addToBasketButton = page.locator('[data-qa="product-button"]').first()
  const basketCounter = page.locator('[data-qa="header-basket-count"]')

  await addToBasketButton.waitFor()
  await expect(addToBasketButton).toHaveText("Add to Basket")
  await expect(basketCounter).toHaveText("0")

  await addToBasketButton.click()

  await expect(addToBasketButton).toHaveText("Remove from Basket")
  await expect(basketCounter).toHaveText("1")

  const checkoutLink = page.getByRole('link', { name: 'Checkout' })
  await checkoutLink.waitFor()
  await checkoutLink.click()
  await page.waitForURL("/basket")

  //await page.pause()

})

// psuedo code e2e - prep for lesson 12
// productPage.visit()
// productPage.sortProductsByCheapest()
// productPage.addItemToBasket(1)
// Navigation.moveToCheckout()
// basket.removeCheapestItem()