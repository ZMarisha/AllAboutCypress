
describe('visit site todoList', () => {
    beforeEach(() => {
        cy.visit('https://forhemer.github.io/React-Todo-List/');
    });

    it('', () => {
        cy.get('.input-text').type('Todo №1{enter}')
        .type('Todo №2{enter}')
        .type('Todo №3{enter}');

        cy.get('ul > li').should('have.length', 3)
        .and('contain', 'Todo №1')
        .and('contain', 'Todo №2')
        .and('contain', 'Todo №3')
    });
});