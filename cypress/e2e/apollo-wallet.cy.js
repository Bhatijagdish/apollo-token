import { signupAlert } from "./pages/signup_alert"
import { Wallet } from "./pages/wallet"

const wallet = new Wallet()
const sign = new signupAlert()

beforeEach(() => {
    cy.visit('https://www.apollotoken.app/')
})

describe('Wallet Tests', () => {

    beforeEach(() => {
        // sign.beforeVisit()
        // sign.loginUsername('DWNG37dX')
        // sign.loginPassword('Testing@123')
        // sign.clickSubmit()
    })
    it("Testing Wallet Side Nav", () => {
        wallet.expaneWallet()
        wallet.connectWallet()
        cy.get('p').contains(wallet.connect_wallet).should('be.visible')

    })




})