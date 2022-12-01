import { Base } from './base'
import { signupAlert } from './pages/signup_alert'
import { HomePage } from './pages/home_page'
import { CallsPage } from './pages/calls_page'

const signalert = new signupAlert()
const home = new HomePage()
const calls = new CallsPage()

beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('Calls page Tests', () => {

    beforeEach(() => {
        signalert.beforeVisit()
    })

    it('Validating Calls tab post conecting wallet', () => {
        signalert.loginUsername('DWNG37dX')
        signalert.loginPassword('Testing@123{enter}')
        home.successSignin()
    })
})
