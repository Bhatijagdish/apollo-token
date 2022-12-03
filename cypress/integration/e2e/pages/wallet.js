export class Wallet{
    wallet_expand = '.Sidebar_icon__czDJe '
    connect_wallet = 'Connect Wallet'

    expandWallet(){
        cy.get(this.wallet_expand).click()
    }

    isNavVisible(){
        cy.get(this.wallet_expand).should('be.visible')
    }

    connectWallet(){
        cy.get('p').contains(this.connect_wallet).click()
    }
}