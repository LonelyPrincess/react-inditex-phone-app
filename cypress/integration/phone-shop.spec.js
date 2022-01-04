context('Phone list page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/products`,
    }, {
      delay: 2000,
      fixture: 'get-product-list.json',
    }).as('getProductListRequest');
  });

  it('should display list of available phones', () => {
    cy.wait('@getProductListRequest');
    cy.get('[data-cy=product-list-item]').should('have.length', 100);

    cy.get('[data-cy=product-search-box]').type('Alcatel');
    cy.get('[data-cy=product-list-item]').should('have.length', 1);
  });
});
