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
      genericField : ".oxd-input--active",
      genericComboBox : ".oxd-select-text--arrow",
      dateField: "[placeholder='yyyy-mmd-dd']",
      dateCloseButton: ".--close",
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
      //First Name
      cy.get(selectorList.firstNameField).clear().type('FirstNTest');
      // Middle Name
      cy.get(selectorList.middleNameField).clear().type('MiddleNameTest');
      // Last Name
      cy.get(selectorList.lastNameField).clear().type('LastNTest');
      // Employee Id
      cy.get(selectorList.genericField).eq(3).clear().type('EmpTest');
      // Other Id
      cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest');
      // Driver's License Number
      cy.get(selectorList.genericField).eq(5).clear().type('TEST1234');
      // License Expire Date
      cy.get(selectorList.genericField).eq(6).clear().type('2025-18-10');
      cy.get(selectorList.dateCloseButton).click();
      //Date of Birth
      cy.get(selectorList.genericField).eq(7).clear().type('1970-31-01');
      cy.get(selectorList.dateCloseButton).click();
     
     // Nationality
     cy.get(selectorList.genericComboBox).eq(0).click();
     cy.get('.oxd-select-dropdown > :nth-child(2)').click();

     // Marital status
     cy.get(selectorList.genericComboBox).eq(1).click();
     cy.get('.oxd-select-dropdown > :nth-child(3)').click();

     // Gender
     cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click();

    // save 1 - 
    cy.get(selectorList.submitButton).eq(0).click({force: true});  

    // mensagem update success      
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast-close');   



    })
   
  })