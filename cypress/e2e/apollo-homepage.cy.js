import { HomePage } from './pages/home_page'

const homePage = new HomePage()

beforeEach(() => {
  cy.visit('https://www.apollotoken.app/')
})

describe('Home Page', () => {

  it('Testing Homepage', () => {
    homePage.successSignout()
  })
})