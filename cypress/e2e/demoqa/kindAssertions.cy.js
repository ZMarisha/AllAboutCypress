describe('kind assertions with using site demoQA', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button');
    });

    it('TDD Asertions', () => {
        // check length
        cy.get('input[type="radio"]').should('have.length', 3);
        // check class
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled');

        //not exist
        cy.get('.mt-3').should('not.exist');
        // click checkbox and check appeared text Yes
        cy.get('input[type="radio"]').eq(0).check();
        cy.get('.mt-3').should('contain.text', 'You have selected Yes');
        cy.get('.mt-3 > span').should('have.class', 'text-success');

        // click checkbox and check appeared text Impressive
        cy.get('input[type="radio"]').eq(1).check({force: true});
        cy.get('.mt-3').should('contain.text', 'You have selected Impressive')
        cy.get('.mt-3 > span').should('have.class', 'text-success');
        //not contain
        cy.get('input[type="radio"]').eq(1).check({force: true});
        cy.get('.mt-3').should('not.contain', 'Test')
        //check color text
        cy.get('.mt-3 > span').should('have.css', 'color', 'rgb(40, 167, 69)')
    });

    it('BDD Assertions', () => {
        //check length and class
        cy.get('input[type="radio"]').should($inputs => {
            expect($inputs).to.have.lengthOf(3);
            expect($inputs).to.have.class('disabled')
        })
        //check text
        cy.get('input[type="radio"]').eq(1).check({force: true});
        cy.get('.mt-3').should($el => {
            expect($el).to.have.text('You have selected Impressive');
            expect($el).to.include.text('Impressive');
            expect($el).to.not.include.text('Test')
        })
    })
})