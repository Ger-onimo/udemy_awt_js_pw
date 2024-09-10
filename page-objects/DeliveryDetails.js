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

  fillDetails = async() => {
    await this.firstNameInput.waitFor()
    await this.firstNameInput.fill('Gezza')
    await this.lastNameInput.waitFor()
    await this.lastNameInput.fill('Waterston')
    await this.streetInput.waitFor()
    await this.streetInput.fill('6 My Street')
    await this.postcodeInput.waitFor()
    await this.postcodeInput.fill('EH1 2AB')
    await this.cityInput.waitFor()
    await this.cityInput.fill('Edinburgh')
    await this.countryDropdown.waitFor()
    await this.countryDropdown.selectOption("United States of America")
   
//  await this.page.pause()

  }
}