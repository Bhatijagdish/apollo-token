import { Base } from './base'
import { signupAlert } from './pages/signup_alert'
import { HomePage } from './pages/home_page'

const sign = new signupAlert()
const home = new HomePage()
const base= new Base()


beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('SignUp Tests', () => {

    beforeEach(() => {
        sign.beforeVisit()
        sign.clickSignup()
    })
    it('Signup with valid details using submit button', () => {
        sign.signupUsername(base.makeUserName(8))
        sign.signupPassword('Testing@123')
        sign.signupConfirmPassword('Testing@123')
        sign.signupSubmit()
        home.successSignout()
    })

    it('Signup with valid details with enter', () => {
        sign.signupUsername(base.makeUserName(8))
        sign.signupPassword('Testing@123')
        sign.signupConfirmPassword('Testing@123{enter}')
        home.successSignout()
    })

    
    it('Signup with mismatch passwords', () => {
        sign.signupUsername(base.makeUserName(8))
        sign.signupPassword('Testing@123')
        sign.signupConfirmPassword('Testing@67896')
        sign.signupSubmit()
        sign.passwordError('Password must match')
    })

    it('Signup with invalid username', () => {
        sign.signupUsername(base.makeUserName(8))
        sign.signupPassword('Testing@123')
        sign.signupConfirmPassword('Testing@123{enter}')
        cy.get(sign.usernameErrrorText).should('contain.text', 'Invalid username')
    })

})
