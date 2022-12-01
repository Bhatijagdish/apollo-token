import { Base } from './base'
import { CallsPage } from './pages/calls_page'
import { HomePage } from './pages/home_page'

const callsLoginPage = new CallsPage()
const home = new HomePage()
const base = new Base()

beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('All Login Tests', () => {

    beforeEach(() => {
        callsLoginPage.beforeVisit()
    })

    it('Login Test with Submit button', () => {
        callsLoginPage.loginUsername('DWNG37dX')
        callsLoginPage.loginPassword('Testing@123')
        callsLoginPage.clickSubmit()
        home.successSignin()

    })
    it('Login Test with Enter', () => {
        callsLoginPage.loginUsername('DWNG37dX')
        callsLoginPage.loginPassword('Testing@123{enter}')
        home.successSignin()
    })

    it('Login Test with invalid details', () => {
        callsLoginPage.loginUsername(base.makeUserName(8))
        callsLoginPage.loginPassword('Testing@123{enter}')
        home.successSignout()
    })

})
