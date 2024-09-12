import { test } from "@playwright/test"
import { v4 as uuidv4 } from "uuid"
import { ProductsPage } from "../page-objects/ProductsPage.js"
import { Navigation } from "../page-objects/Navigation.js"
import { Checkout } from "../page-objects/Checkout.js"
import { LoginPage } from "../page-objects/LoginPage.js"
import { RegisterPage } from "../page-objects/RegisterPage.js"
import { DeliveryDetails } from "../page-objects/DeliveryDetails.js"
import { deliveryDetails as userAddress } from "../data/deliveryDetails.js"
import { PaymentPage } from "../page-objects/PaymentPage.js"
import { paymentDetails } from "../data/paymentDetails.js"


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

//   // Calls Navigation Class and get BasketCount() & goToCheckout() methods
//   const navigation = new Navigation(page)
//   await navigation.goToCheckout()

//   // Calls Checkout class and removeCheapestProduct() method
//   const checkout = new Checkout(page)
//   await checkout.removeCheapestProduct()
//   // Continue to checkout - redirects to login page  
//   // Calls continueToCheckout()
//   await checkout.continueToCheckout()

//   // Calls the LoginPage page object class
//   // Register: go to the signup page
//   const login = new LoginPage(page)
//   await login.moveToSignup()

// // Calls the RegisterPage page object class
// const registerPage = new RegisterPage(page)
// //  pass in the email & password
// const email = uuidv4() + "@qa.com"
// const password = uuidv4()
// await registerPage.signUpAsNewUser(email, password)

// // Calls the DeliveryDetails page object class
// const deliveryDetails = new DeliveryDetails(page)
// // userAddress is the deliveryDetails object which passes in the data to the method in the DeliveryDetails page class object
// await deliveryDetails.fillDetails(userAddress)
// await deliveryDetails.saveDetails()
// await deliveryDetails.continueToPayment()
  
// const paymentPage = new PaymentPage(page)
// await paymentPage.activateDiscount()
// await paymentPage.fillPaymentDetails(paymentDetails)
// await paymentPage.completePayment()
// // await page.pause()

}) 