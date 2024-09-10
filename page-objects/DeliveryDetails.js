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
    await expect(this.savedAddressContainer).toHaveCount(addressCountBeforeSaving + 1)
    // await this.page.pause()
  }
}