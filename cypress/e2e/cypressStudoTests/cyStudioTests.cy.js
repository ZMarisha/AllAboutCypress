/* ==== Test Created with Cypress Studio ==== */
it('cyStudioTest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  //скопировать текст username из блока
  cy.get('#login_credentials').click();
  //почистить поле ввода
  cy.get('[data-test="username"]').clear('standard_user');
  cy.get('[data-test="username"]').type('standard_user');
  //скопировать текст пароля из блока
  cy.get('.login_password').click();
  cy.get('[data-test="password"]').clear('secret_sauce');
  cy.get('[data-test="password"]').type('secret_sauce');
  //нажать на кнопку Login
  cy.get('[data-test="login-button"]').click();
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
  /* ==== End Cypress Studio ==== */
});