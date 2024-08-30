import { test } from "@playwright/test"

test("Product Page Add to Basket", async ({ page }) => {
  await page.goto("localhost:2221")

  const addToBasketButton = page.getByRole('button', { name: 'Add to Basket'}).first()
  await addToBasketButton.waitFor()
  await addToBasketButton.click()
  
  await page.pause()

})
