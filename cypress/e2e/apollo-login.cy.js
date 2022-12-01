import { Base } from './base'
import { signupAlert } from './pages/signup_alert'
import { HomePage } from './pages/home_page'

const signalert = new signupAlert()
const home = new HomePage()
const base = new Base()

beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('All Login Tests', () => {

    beforeEach(() => {
        signalert.beforeVisit()
    })

    it('Login Test with Submit button', () => {
        signalert.loginUsername('DWNG37dX')
        signalert.loginPassword('Testing@123')
        signalert.clickSubmit()
        home.successSignin()

    })
    it('Login Test with Enter', () => {
        signalert.loginUsername('DWNG37dX')
        signalert.loginPassword('Testing@123{enter}')
        home.successSignin()
    })

    it('Login Test with invalid details', () => {
        signalert.loginUsername(base.makeUserName(8))
        signalert.loginPassword('Testing@123{enter}')
        home.successSignout()
    })

})
