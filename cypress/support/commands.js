Cypress.Commands.add('getByElTestData', (data) => {
    cy.get(`[data-test="${data}"]`)
})

Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"').click();
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.location('pathname').should('eq', '/')
})

