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

    cy.get('[data-cy=product-search-box]').clear();
    cy.get('[data-cy=product-list-item]').should('have.length', 100);
  });

  it('should be able to navigate to details', () => {
    cy.wait('@getProductListRequest');

    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/products/q7dTIKOZuH9JA6CI_Ra6e`,
    }, {
      delay: 2000,
      fixture: 'get-product-details.json',
    }).as('getProductDetails');

    cy.get('[data-cy=product-search-box]').type('Allegro');
    cy.get('[data-cy=product-list-item]')
      .first()
      .click();

    cy.url().should('match', /\/products\/q7dTIKOZuH9JA6CI_Ra6e/);
  });

  it('should display error message if product does not exist', () => {
    cy.wait('@getProductListRequest');

    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/products/fake-product-id`,
    }, {
      statusCode: 404,
    }).as('getProductDetailsRequest');

    cy.visit('/products/fake-product-id');

    cy.wait('@getProductDetailsRequest');

    cy.get('[data-cy=product-not-found-message]').should('be.visible');
  });
});
