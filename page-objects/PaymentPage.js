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
      // await this.page.pause() 

      
    }
}