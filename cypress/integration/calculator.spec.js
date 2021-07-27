describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display with result of arithmetical operations', () => {
    cy.get("#number4").click();
    cy.get("#operator-multiply").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should('contain', '36');
  })

  it('should chain multiple operations together', () => {
    cy.get("#number4").click();
    cy.get("#operator-multiply").click();
    cy.get("#number9").click();
    cy.get("#operator_add").click();
    cy.get("#number1").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should('contain', '37');
  })

  it('should have negative numbers', () => {
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should('contain', '-6');
  })
})