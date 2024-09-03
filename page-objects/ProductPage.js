export class ProductsPage {
  constructor (page) {
    this.page = page
  }

  visit = async () => {
    await this.page.goto("/")
    }

}