import { expect } from "@playwright/test"

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
    this.saveAddressButton = page.getByRole('button', { name: 'Save address for next time' })
    this.savedAddressContainer = page.locator('[data-qa="saved-address-container"]')
    this.savedAddressFirstName = page.locator('[data-qa="saved-address-firstName"]')
    this.savedAddressLastName = page.locator('[data-qa="saved-address-lastName"]')
    this.savedAddressStreet = page.locator('[data-qa="saved-address-street"]')
    this.savedAddressPostcode = page.locator('[data-qa="saved-address-postcode"]')
    this.savedAddressCity = page.locator('[data-qa="saved-address-city"]')
    this.savedAddressCountry = page.locator('[data-qa="saved-address-country"]')
    
  }
// change the method name from deliveryDetails as there is now a
// deliveryDetails object in the data folder - now being named as userAddress
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
  }

  saveDetails = async () => {
    const addressCountBeforeSaving = await this.savedAddressContainer.count()
    await this.saveAddressButton.waitFor()
    await this.saveAddressButton.click()
    await expect(this.savedAddressContainer)
      .toHaveCount(addressCountBeforeSaving + 1)
    
    await this.savedAddressFirstName.first().waitFor()
    expect(await this.savedAddressFirstName.first().innerText())
      .toBe(await this.firstNameInput.inputValue())
    
    await this.savedAddressLastName.first().waitFor()
    expect(await this.savedAddressLastName.first().innerText())
      .toBe(await this.lastNameInput.inputValue())
    
    await this.savedAddressStreet.first().waitFor()
    expect(await this.savedAddressStreet.first().innerText())
      .toBe(await this.streetInput.inputValue())
    
    await this.savedAddressPostcode.first().waitFor()
    expect(await this.savedAddressPostcode.first().innerText())
      .toBe(await this.postcodeInput.inputValue())
    
    await this.savedAddressCity.first().waitFor()
    expect(await this.savedAddressCity.first().innerText())
      .toBe(await this.cityInput.inputValue())
    
    await this.savedAddressCountry.first().waitFor()
    expect(await this.savedAddressCountry.first().innerText())
      .toBe(await this.countryDropdown.inputValue())
    
    // await this.page.pause()
  }
}