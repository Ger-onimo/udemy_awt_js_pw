export class DeliveryDetails {
  constructor(page) {
    this.page = page

    // form selectors:
    this.firstNameInput = page.locator('[data-qa="delivery-first-name"]')
    this.lastNameInput = page.locator('[data-qa="delivery-last-name"]')
    this.streetInput = page.locator('[data-qa="delivery-address-street"]')
    this.postcodeInput = page.locator('[data-qa="delivery-postcode"]')
    this.cityInput = page.locator('[data-qa="delivery-city"]')
    this.countryDropdown = page.locator('[data-qa="country-dropdown"]')
    
    
  }
//  change method name from deliveryDetails as there is now a deliveryDetails object in the data folder
  fillDetails = async (userAddress) => {
    await this.firstNameInput.waitFor()
    await this.firstNameInput.fill(userAddress.firstName)
    await this.lastNameInput.waitFor()
    await this.lastNameInput.fill(userAddress.lastName)
    await this.streetInput.waitFor()
    await this.streetInput.fill(userAddress.street)
    await this.postcodeInput.waitFor()
    await this.postcodeInput.fill(userAddress.postcode)
    await this.cityInput.waitFor()
    await this.cityInput.fill(userAddress.city)
    await this.countryDropdown.waitFor()
    await this.countryDropdown.selectOption(userAddress.country)
   
    await this.page.pause()
 

  }
}