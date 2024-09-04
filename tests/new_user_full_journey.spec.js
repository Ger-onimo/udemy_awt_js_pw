import { test } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductsPage"
import { Navigation } from "../page-objects/Navigation"

test.only("New user full end-to-end test journey", async ({ page }) => {
  const productsPage = new ProductsPage(page)
  // goto the products page url
  await productsPage.visit()
  // add the first 3 product items
  await productsPage.addProductToBasket(0)
  await productsPage.addProductToBasket(1)
  await productsPage.addProductToBasket(2)
  const navigation = new Navigation(page)
  await navigation.goToCheckout()

  // await page.pause()

}) 