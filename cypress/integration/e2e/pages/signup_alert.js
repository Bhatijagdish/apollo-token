import { CallsPage } from "./calls_page"
const calls = new CallsPage()

export class signupAlert {

    validUsername = 'Testing'
    validPassword = 'Testing@123'

    loginID = ':nth-child(2) > .outline-none'
    password = ':nth-child(3) > .outline-none'
    submit = 'button'


    signup_hyperlink = '.underline'
    signup_username = ':nth-child(2) > .outline-none'
    signup_password = ':nth-child(3) > .outline-none'
    signup_confirm_pass = ':nth-child(4) > .outline-none'
    signup_submit = 'button'

    usernameErrrorText = ':nth-child(2) > .text-\[12px\]'
    passwordErrrorText = ':nth-child(3) > .text-\[12px\]'

    loginUsername(userName) {
        cy.get(this.loginID).type(userName)
    }

    loginPassword(passWord) {
        cy.get(this.password).type(passWord)
    }

    clickSubmit() {
        cy.get(this.submit).click()
    }

    clickSignup() {
        cy.get(this.signup_hyperlink).click()
    }

    signupUsername(userName) {
        cy.get(this.signup_username).type(userName)
    }

    signupPassword(passWord) {
        cy.get(this.signup_password).type(passWord)
    }

    signupConfirmPassword(passWord) {
        cy.get(this.signup_confirm_pass).type(passWord)
    }

    signupSubmit() {
        cy.get(this.signup_submit).click()
    }

    passwordError(ErrorMessage) {
        cy.get(this.passwordErrrorText).should('contain.text', ErrorMessage)
    }

    validSignup() {
        this.clickSignup()
        this.signupUsername(this.validUsername)
        this.signupPassword(this.validPassword)
        this.signupConfirmPassword(this.validPassword)
        this.signupSubmit()
    }

    validlogin() {
        this.loginUsername(this.validUsername)
        this.loginPassword(this.validPassword)
        this.clickSubmit()
    }
}