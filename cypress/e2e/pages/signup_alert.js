import { CallsPage } from "./calls_page"
const calls = new CallsPage()

export class signupAlert{

    loginID = ':nth-child(2) > .outline-none'
    password = ':nth-child(3) > .outline-none'
    submit = '.mx-5'
    
    
    signup = '.underline'
    signup_username = ':nth-child(2) > .outline-none'
    signup_password =  ':nth-child(3) > .outline-none'
    signup_confirm_pass = ':nth-child(4) > .outline-none'
    signup_submit = '.mx-5'

    usernameErrrorText = ':nth-child(2) > .text-\[12px\]'
    passwordErrrorText = '.text-[12px]'


    beforeVisit(){
        cy.get(calls.callButton).click()
    }

    loginUsername(userName){
        cy.get(this.loginID).type(userName)
    }

    loginPassword(passWord){
            cy.get(this.password).type(passWord)
    }

    clickSubmit(){
        cy.get(this.submit).click()
    }

    clickSignup(){
        cy.get(this.signup).click()
    }

    signupUsername(userName){
        cy.get(this.signup_username).type(userName)
    }

    signupPassword(passWord){
        cy.get(this.signup_password).type(passWord)
    }

    signupConfirmPassword(passWord){
        cy.get(this.signup_confirm_pass).type(passWord)
    }

    signupSubmit(){
        cy.get(this.signup_submit).click()
    }

    passwordError(ErrorMessage){
        cy.get(this.passwordErrrorText).should('contain.text', ErrorMessage)
    }
}