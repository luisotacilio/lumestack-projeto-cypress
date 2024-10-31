import userData from '../fixtures/users/userData.json'
describe('Orange HRM Tests', () => {

    const selectorList = {
      usernameField : "[name='username']",
      passwordField : "[name='password']",
      loginButton : "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboardGrid : ".orangehrm-dashboard-grid",
      wrongCredentialAlert : "[role='alert']",
      myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
      firstNameField : "[name='firstName']",
      middleNameField : "[name='middleName']", 
      lastNameField : "[name='lastName']",
      submitButton: "[type='submit']",
    }

    it.only('User Info Update - Sucess', () => {
      cy.visit('/auth/login');
      cy.get(selectorList.usernameField).type(userData.userSuccess.username);
      cy.get(selectorList.passwordField).type(userData.userSuccess.password);
      cy.get(selectorList.loginButton).click();
      cy.location('pathname').should('equal','/web/index.php/dashboard/index' );
      cy.get(selectorList.dashboardGrid);    
      cy.get(selectorList.myInfoButton).click();
      cy.get(selectorList.firstNameField).clear().type('FirstNTest');
      cy.get(selectorList.middleNameField).clear().type('MiddleNameTest');
      cy.get(selectorList.lastNameField).clear().type('LastNTest');
      cy.get(selectorList.submitButton).eq(0).click();  
      cy.get('.oxd-toast-close');
      

    })
   
  })