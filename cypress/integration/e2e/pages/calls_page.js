export class CallsPage{
    callButton = '[href="/calls"]'

    beforeVisit() {
        cy.get(this.callButton).click()
    }
}