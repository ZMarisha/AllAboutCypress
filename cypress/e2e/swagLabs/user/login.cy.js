const tests = require('../../../fixtures/login.json');

describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('login.json')
    });

    it('should have text Swag Labs', () => {
        cy.get('.login_logo').contains('Swag Labs');
    });

    it('valid from standard_user rights', () => {
        cy.login(tests.standardUser, tests.systemPassword);
        cy.location('pathname').should('eq', '/inventory.html')
        cy.get('.header_secondary_container > span').should('contain.text', 'Products')
    });

    it('valid from problem_user rights', () => {
        cy.getByElTestData('username').type('problem_user');
        cy.getByElTestData('password').type('secret_sauce{enter}');
        cy.get('.header_secondary_container > span').should('contain.text', 'Products')
    });

    it('valid from performance_glitch_user rights', () => {
        cy.getByElTestData('username').type('performance_glitch_user');
        cy.getByElTestData('password').type('secret_sauce');
        cy.getByElTestData('login-button').click();
        cy.location('pathname').should('eq', '/inventory.html')
        cy.get('.header_secondary_container > span').should('contain.text', 'Products')
    });

    it('valid from error_user rights', () => {
        cy.getByElTestData('username').type('error_user');
        cy.getByElTestData('password').type('secret_sauce');
        cy.getByElTestData('login-button').click();
        cy.get('.header_secondary_container > span').should('contain.text', 'Products')
    });

    it('valid from locked_out_user rights', () => {
        cy.getByElTestData('username').type('locked_out_user');
        cy.getByElTestData('password').type('secret_sauce');
        cy.getByElTestData('login-button').click({force: true});
        cy.getByElTestData('error').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('sending empty form', () => {
        cy.getByElTestData('username').should('have.value', '');
        cy.getByElTestData('password').should('have.value', '');
        cy.getByElTestData('login-button').click();

        cy.getByElTestData('username').should('have.class', 'error');
        cy.getByElTestData('password').should('have.class', 'error');
        cy.getByElTestData('error').contains('Epic sadface: Username is required');
        cy.get('.error-message-container > h3 > button').click();
    });

     it('empty username', () => {
        cy.getByElTestData('username').should('have.value', '');
        cy.getByElTestData('password').type('secret_sauce{enter}');
        cy.getByElTestData('error').should('be.visible');
        cy.getByElTestData('error').should('contain', 'Epic sadface: Username is required');
    });

      it('empty password', () => {
        cy.getByElTestData('username').type('standard_user');
        cy.getByElTestData('password').should('have.value', '');
        cy.getByElTestData('login-button').click();
        cy.getByElTestData('error').should('contain.text', 'Epic sadface: Password is required');
    });

    it('invalid username', () => {
        cy.getByElTestData('username').type('123458');
        cy.getByElTestData('password').type('secret_sauce');
        cy.getByElTestData('login-button').click();
        cy.getByElTestData('error').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('invalid password', () => {
        cy.getByElTestData('username').type('standard_user');
        cy.getByElTestData('password').type('45567');
        cy.getByElTestData('login-button').click();
        cy.getByElTestData('error').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });
})