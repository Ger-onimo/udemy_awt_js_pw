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
      await this.discountInput.fill(code)
  //  wait to see the input field contains the entered value 
      await expect(this.discountInput).toHaveValue(code)
      // expect this.discountInput.toHaveText(code)

    // await this.page.pause()   
    }
}