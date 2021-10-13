describe('Test user-editor', () => {
  beforeEach( () => {
    cy.visit('/login');
  });

  it('Login', () => {
    cy.get('input[name="email"]')
      .first()
      .type('diggulden0@senate.gov')
      .should('have.value', 'diggulden0@senate.gov');

    cy.get('input[name="password"]')
      .first()
      .type('test')
      .should('have.value', 'test');

    cy.get('button[type="submit"]')
      .first()
      .click();

    cy.url().should('eq', 'http://127.0.0.1:4201/');
  });
});
