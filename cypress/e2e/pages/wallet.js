export class Wallet{
    wallet_expand = '#Sidebar_icon__czDJe'
    connect_wallet = 'Connect Wallet'

    expaneWallet(){
        cy.get(this.wallet_expand).click()
    }

    connectWallet(){
        cy.get('p').contains(this.connect_wallet).click()
    }
}