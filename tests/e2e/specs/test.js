describe('Login test', () => {
  it('Visit login page', () => {
    cy.visit('/login');
    cy.contains('h1', 'Login');

    // Check if form elements exists
    cy.get('[type="email"]').should('have.length', 1);
    cy.get('[type="password"]').should('have.length', 1);
    cy.get('[type="submit"]').should('have.length', 1);

    // Check form submit with correct data
    cy.get('[type="email"]').type('test@test.com');
    cy.get('[type="password"]').type('qwerty123');
    cy.get('[type="submit"]').click();

    // Check login response
    cy.get('.vm--modal').contains('Your id is 123');
    cy.get('.vue-dialog-button').click();
    cy.contains('h1', 'User Details');
  });
});
