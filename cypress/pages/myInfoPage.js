class MyInfo {

    selectorsList(){
        const selectors = {

            firstNameField : "[name='firstName']",
            middleNameField : "[name='middleName']", 
            lastNameField : "[name='lastName']",
            genericField : ".oxd-input--active",
            genericComboBox : ".oxd-select-text--arrow",
            dateField: "[placeholder='yyyy-mmd-dd']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",

        }
        return selectors;
      
    }

    updateMyInfoPage() {
         //First Name
        cy.get (this.selectorsList.firstNameField).clear().type('FirstNTest');
         // Middle Name
        cy.get(this.selectorList.middleNameField).clear().type('MiddleNameTest');
         // Last Name
        cy.get(this.selectorList.lastNameField).clear().type('LastNTest');
        // Employee Id
        cy.get(this.selectorList.genericField).eq(3).clear().type('EmpTest');
        // Other Id
         cy.get(this.selectorList.genericField).eq(4).clear().type('OtherIdTest');
        // Driver's License Number
        cy.get(this.selectorList.genericField).eq(5).clear().type('TEST1234');
        // License Expire Date
        cy.get(this.selectorList.genericField).eq(6).clear().type('2025-18-10');
        cy.get(this.selectorList.dateCloseButton).click();
        //Date of Birth
        cy.get(this.selectorList.genericField).eq(7).clear().type('1970-31-01');
        cy.get(this.selectorList.dateCloseButton).click();
        // Nationality
        cy.get(this.selectorList.genericComboBox).eq(0).click();
        cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        // Marital status
          cy.get(this.selectorList.genericComboBox).eq(1).click();
          cy.get('.oxd-select-dropdown > :nth-child(3)').click();
        // Gender
         cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click();

        //  save 1 - 
        cy.get(this.selectorList.submitButton).eq(0).click({force: true});  
        // mensagem update success      
        cy.get('.oxd-text--toast-message').should('contain', 'Successfully Updated');
        cy.get('.oxd-toast-close');   
            
    }


}