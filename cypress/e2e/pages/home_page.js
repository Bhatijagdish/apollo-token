
export class HomePage{
    signin = 'p.mx-2'

    successSignout(){
        cy.get(this.signin).should('not.contain.text', "Sign Out")
    }

    successSignin(){
        cy.get(this.signin).should('contain.text', "Sign Out")
    }
}