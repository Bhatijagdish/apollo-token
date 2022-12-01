import { Base } from './base'
import { CallsPage } from './pages/calls_page'
import { HomePage } from './pages/home_page'

const callsSignupPage = new CallsPage()
const home = new HomePage()
const base= new Base()


beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('SignUp Tests', () => {

    beforeEach(() => {
        callsSignupPage.beforeVisit()
        callsSignupPage.clickSignup()
    })
    it('Signup with valid details using submit button', () => {
        callsSignupPage.signupUsername(base.makeUserName(8))
        callsSignupPage.signupPassword('Testing@123')
        callsSignupPage.signupConfirmPassword('Testing@67896')
        callsSignupPage.signupSubmit()
        home.successSignout()
    })

    it('Signup with valid details with enter', () => {
        callsSignupPage.signupUsername(base.makeUserName(8))
        callsSignupPage.signupPassword('Testing@123')
        callsSignupPage.signupConfirmPassword('Testing@67896{enter}')
        home.successSignout()
    })

    
    it('Signup with mismatch passwords', () => {
        callsSignupPage.signupUsername(base.makeUserName(8))
        callsSignupPage.signupPassword('Testing@123')
        callsSignupPage.signupConfirmPassword('Testing@67896')
        callsSignupPage.signupSubmit()
        callsSignupPage.passwordError('Password must match')
    })

    it('Signup with invalid username', () => {
        callsSignupPage.signupUsername(base.makeUserName(8))
        callsSignupPage.signupPassword('Testing@123')
        callsSignupPage.signupConfirmPassword('Testing@123{enter}')
        cy.get(callsSignupPage.usernameErrrorText).should('contain.text', 'Invalid Username')
    })

})
