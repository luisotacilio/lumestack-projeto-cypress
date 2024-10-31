import userData from '../fixtures/users/userData.json'
describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField : "[name='username']",
    passwordField : "[name='password']",
    loginButton : "[type='submit']",
    myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
  }

  it('CST001- Explorer Test', () => {
    cy.visit('/auth/login');
    cy.get(selectorList.usernameField).type('Admin');
    cy.get(selectorList.passwordField).type('admin123');
    cy.get(selectorList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard');
    cy.get(selectorList.myInfoButton).click();
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();

  
  });

})


