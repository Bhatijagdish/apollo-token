import { Base } from './base'
import { signupAlert } from './pages/signup_alert'
import { HomePage } from './pages/home_page'
import { CallsPage } from './pages/calls_page'
import { Wallet } from './pages/wallet'

const signalert = new signupAlert()
const calls = new CallsPage()
const home = new HomePage()
const wallet= new Wallet()

beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('All Login Tests', () => {

    beforeEach(() => {
        calls.beforeVisit()
    })

    it('Login Test with Submit button', () => {
        signalert.validlogin()
        wallet.isNavVisible()
    })
    it('Login Test with Enter', () => {
        signalert.loginUsername(signalert.validUsername)
        signalert.loginPassword(signalert.validPassword+'{enter}')
        wallet.isNavVisible()
    })

    it('Login Test with invalid details', () => {
        signalert.loginUsername(signalert.validUsername)
        signalert.loginPassword(signalert.validPassword+'{enter}')
        home.successSignout()
    })

})
