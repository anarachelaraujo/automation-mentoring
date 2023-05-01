describe('My first test!', () => {
  it('should access commit quality and assert the url', () => {
    cy.visit('/');
    cy.url().should('include', 'commitquality')
  })

  it('should add a new product ', () => {
    cy.visit('/');
    cy.get('[data-testid="navbar-addproduct"]').click();
    cy.get('[data-testid="product-textbox"]').type('Tshirt')
    cy.get('[data-testid="price-textbox"]').type('50.00')
    cy.get('[data-testid="date-stocked"]').click();
    cy.wait(5000);
    cy.contains('Today').click();
    cy.get('[data-testid="submit-form"]').click();
    cy.get('[data-testid="name"]').should('contain', 'Tshirt');
  })
})