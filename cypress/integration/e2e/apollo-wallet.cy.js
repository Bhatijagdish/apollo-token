import { Base } from "./base"
import { CallsPage } from "./pages/calls_page"
import { signupAlert } from "./pages/signup_alert"
import { Wallet } from "./pages/wallet"

const wallet = new Wallet()
const sign = new signupAlert()
const calls = new CallsPage()

beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('Wallet Tests', () => {    

    beforeEach(() => {
        calls.beforeVisit()
        sign.validSignup()
    })
    it("Testing Wallet Side Nav", () => {
        wallet.isNavVisible()
    })




})