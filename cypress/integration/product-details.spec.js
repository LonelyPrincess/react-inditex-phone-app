context('Product details page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/product/q7dTIKOZuH9JA6CI_Ra6e`,
    }, {
      fixture: 'get-product-details.json',
    }).as('getProductDetailsRequest');
  });

  it('should be able to see the product and add it to shopping cart', () => {
    cy.visit('/products/q7dTIKOZuH9JA6CI_Ra6e');

    cy.intercept({
      method: 'POST',
      url: `${Cypress.env('API_BASE_PATH')}/cart`,
    }, {
      delay: 1000,
      body: {
        count: 1,
      },
    }).as('addProductToCartRequest');

    cy.get('[data-cy=product-name]').should('have.text', 'Acer Allegro');
    cy.get('[data-cy=price-tag]').should('have.text', '140 €');

    cy.get('[data-cy=product-color-selector]').select('1001');

    cy.get('[data-cy=shopping-cart-item-count]').should('have.text', 0);
    cy.get('[data-cy=add-to-shopping-cart-button]').click();
    cy.get('[data-cy=add-to-shopping-cart-button]').should('be.disabled');

    cy.wait('@addProductToCartRequest').then(({ request }) => {
      expect(request.body).to.eql({
        id: 'q7dTIKOZuH9JA6CI_Ra6e',
        colorCode: 1001,
        storageCode: 2000,
      });
    });

    cy.get('[data-cy=add-to-shopping-cart-button]').should('be.enabled');
    cy.get('[data-cy=shopping-cart-item-count]').should('have.text', 1);
  });

  it('should display error message if product does not exist', () => {
    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/product/fake-product-id`,
    }, {
      statusCode: 404,
    }).as('getProductDetailsRequest');

    cy.visit('/products/fake-product-id');

    cy.wait('@getProductDetailsRequest');

    cy.get('[data-cy=product-not-found-message]').should('be.visible');
  });

  it('should be able to return to list page', () => {
    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('API_BASE_PATH')}/product`,
    }, {
      fixture: 'get-product-list.json',
    }).as('getProductListRequest');

    cy.visit('/products/q7dTIKOZuH9JA6CI_Ra6e');

    cy.wait('@getProductDetailsRequest');

    cy.get('[data-cy=breadcrumb-home-link]').click();
    cy.url().should('match', /\/products/);
  });
});
