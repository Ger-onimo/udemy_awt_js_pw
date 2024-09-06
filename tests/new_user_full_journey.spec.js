import { test } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductsPage.js"
import { Navigation } from "../page-objects/Navigation.js"
import { Checkout } from "../page-objects/Checkout.js"
import { LoginPage } from "../page-objects/LoginPage.js"
import { RegisterPage } from "../page-objects/RegisterPage.js"


test.only("New user full end-to-end test journey", async ({ page }) => {
  const productsPage = new ProductsPage(page)
  // goto the products page url
  // Calls the ProductsPage class and visit method
  await productsPage.visit()
  // Calls ProductsPage class and sortByCheapest() method
  await productsPage.sortByCheapest()
  // add the first 3 product items
  // checks the basket count before and after items are added
  // Calls ProductsPage class and addProductToBasket() method
  await productsPage.addProductToBasket(0) 
  await productsPage.addProductToBasket(1)
  await productsPage.addProductToBasket(2)

  // Calls Navigation Class and getBasketCount() & goToCheckout() methods
  const navigation = new Navigation(page)
  await navigation.goToCheckout()

  // Calls Checkout class and removeCheapestProduct() method
  const checkout = new Checkout(page)
  await checkout.removeCheapestProduct()
  // Continue to checkout - redirects to login page  
  // Calls continueToCheckout()
  await checkout.continueToCheckout()

  // Calls the LoginPage page object class
  // Register: go to the signup page
  const login = new LoginPage(page)
  await login.moveToSignup()

// Calls the RegisterPage page object class
const registerPage = new RegisterPage(page)
await registerPage.signUpAsNewUser()
  
// await page.pause()

}) 