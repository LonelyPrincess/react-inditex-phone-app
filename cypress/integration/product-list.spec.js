context('Product list page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/product`,
    }, {
      fixture: 'get-product-list.json',
    }).as('getProductListRequest');
  });

  it('should display list of available products', () => {
    cy.wait('@getProductListRequest');
    cy.get('[data-cy=product-list-item]').should('have.length', 100);

    cy.get('[data-cy=search-term]').should('not.exist');
    cy.get('[data-cy=search-results-count]').should('not.exist');
    cy.get('[data-cy=all-products-count]').should('have.text', 100);

    cy.get('[data-cy=product-search-box]').type('Alcatel');
    cy.get('[data-cy=product-list-item]').should('have.length', 1);

    cy.get('[data-cy=search-term]').should('have.text', 'Alcatel');
    cy.get('[data-cy=search-results-count]').should('have.text', 1);
    cy.get('[data-cy=all-products-count]').should('have.text', 100);

    cy.get('[data-cy=product-search-box]').clear();
    cy.get('[data-cy=product-list-item]').should('have.length', 100);
  });

  it('should be able to navigate to product details', () => {
    cy.wait('@getProductListRequest');

    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/product/q7dTIKOZuH9JA6CI_Ra6e`,
    }, {
      fixture: 'get-product-details.json',
    }).as('getProductDetails');

    cy.get('[data-cy=product-search-box]').type('Allegro');
    cy.get('[data-cy=product-list-item]')
      .first()
      .click();

    cy.url().should('match', /\/products\/q7dTIKOZuH9JA6CI_Ra6e/);
  });
});
