import { expect } from "@playwright/test"

export class PaymentPage {
    constructor(page) {
        this.page = page

      // nested locator
        this.discountCode = page
            .frameLocator('[data-qa="active-discount-container"]')
            .locator('[data-qa="discount-code"]')
        this.discountInput = page.getByPlaceholder('Discount code')
        // this option works, not sure of reasoning to use the picker option as suggested above
        // this.discountInput = page.locator('[data-qa="discount-code-input"]')
        this.activateDiscountButton = page.locator('[data-qa="submit-discount-button"]')
        this.discountActivatedMessage = page.locator('[data-qa="discount-active-message"]')
        this.totalValue = page.locator('[data-qa="total-value"]')
        this.discountedValue = page.locator('[data-qa="total-with-discount-value"]')
      }

    activateDiscount = async () => {
      await this.discountCode.waitFor()
      const code = await this.discountCode.innerText()
      await this.discountInput.waitFor()
      // Option 1 for laggy/slow inputs: using .fill() with await expect()
      await this.discountInput.fill(code)
      await expect(this.discountInput).toHaveValue(code)
      // Option 2 for laggy/slow inputs: slow typing. 
      // await this.discountInput.focus()
      // await this.page.keyboard.type(code, { delay: 500 })
      // expect (await this.discountInput.inputValue()).toBe(code)
      expect (await this.discountedValue.isVisible()).toBe(false)
      expect (await this.discountActivatedMessage.isVisible()).toBe(false)
      await this.activateDiscountButton.waitFor()
      await this.activateDiscountButton.click()
       // "Discount activated" message displays
      await this.discountActivatedMessage.waitFor()
      await expect(this.discountActivatedMessage)
            .toHaveText("Discount activated!")
      // check discounted total is showing
      await this.discountedValue.waitFor()
      const discountValueText = await this.discountedValue.innerText()
      //  Strip out the $ and then parse the string to a number
      const discountValueOnlyStringNumber = discountValueText.replace("$", "")
      const discountValueNumber = parseInt(discountValueOnlyStringNumber, 10)
      // check total is showing
      await this.totalValue.waitFor()
      const totalValueText = await this.totalValue.innerText()
      const totalValueOnlyStringNumber = totalValueText.replace("$", "")
      const totalValueNumber = parseInt(totalValueOnlyStringNumber, 10)

      expect (discountValueNumber).toBeLessThan(totalValueNumber)
      
      // await this.page.pause() 
    }
}