export class RegisterPage {
  constructor(page) {
    this.page = page

    this.emailInput = page.getByPlaceholder('E-Mail')
    this.passwordInput = page.getByPlaceholder('Password')
    this.registerButton = page.getByRole('button', { name: 'Register' })

  }
// put the email and password into the method parameters - move from the
// body of the method - see commit for lesson 23.
// email and password now call the test (new_user_full_journey)
  signUpAsNewUser = async (email, password) => {
   //type into email input
   await this.emailInput.waitFor()
   await this.emailInput.fill(email)
  //  type into password input 
  await this.passwordInput.waitFor()
  await this.passwordInput.fill(password)
  // click register button
  await this.registerButton.waitFor()
  await this.registerButton.click()

  // await this.page.pause()

  }
}