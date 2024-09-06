export class RegisterPage {
  constructor(page) {
    this.page = page

    this.emailElement = page.getByPlaceholder('E-Mail')
    this.passwordElement = page.getByPlaceholder('Password')
    this.registerButton = page.getByRole('button', { name: 'Register' })

  }

  signUpAsNewUser = async () => {
   //type into email input
   await this.emailElement.waitFor()
   await this.emailElement.fill("qa@qa.com")
  //  type into password input 
  await this.passwordElement.waitFor()
  await this.passwordElement.fill("pasword123")
  // click register button
  await this.registerButton.waitFor()
  await this.registerButton.click()

  // await this.page.pause()

  }
}