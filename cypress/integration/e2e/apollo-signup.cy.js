import { signupAlert } from './pages/signup_alert'
import { HomePage } from './pages/home_page'
import { CallsPage } from './pages/calls_page'

const sign = new signupAlert()
const home = new HomePage()
const calls = new CallsPage()

beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('SignUp Tests', () => {

    beforeEach(() => {
        calls.beforeVisit()
        sign.clickSignup()
    })
    it('Signup with valid details using submit button', () => {
        sign.validSignup()
        home.successSignout()
    })

    it('Signup with valid details with enter', () => {
        sign.signupUsername(sign.validUsername)
        sign.signupPassword(sign.validPassword)
        sign.signupConfirmPassword(sign.validPassword+'{enter}')
        home.successSignout()
    })

    
    it('Signup with mismatch passwords', () => {
        sign.signupUsername(sign.validUsername)
        sign.signupPassword('Testing@123')
        sign.signupConfirmPassword('Testing@67896')
        sign.signupSubmit()
        sign.passwordError('Password must match')
    })

    it('Signup with invalid username', () => {
        sign.signupUsername("@@@@@@@@")
        sign.signupPassword('Testing@123')
        sign.signupConfirmPassword('Testing@123{enter}')
        cy.get(sign.usernameErrrorText).should('contain.text', 'Invalid username')
    })
})
