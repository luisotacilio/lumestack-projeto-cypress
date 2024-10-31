import userData from '../fixtures/users/userData.json'
describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField : "[name='username']",
    passwordField : "[name='password']",
    loginButton : "[type='submit']",
   
  }

  it('CST001- Explorer Test', () => {
    cy.visit('/auth/login');
    cy.get(selectorList.usernameField).type('Admin');
    cy.get(selectorList.passwordField).type('admin123');
    cy.get(selectorList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard');
  
  });

})


