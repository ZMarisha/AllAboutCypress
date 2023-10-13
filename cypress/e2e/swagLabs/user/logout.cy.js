describe('logout', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('login.json').then((data) => {
            cy.login(data.standardUser, data.systemPassword)
        })
    });

    it('logout', () => {
        cy.logout();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    })
});