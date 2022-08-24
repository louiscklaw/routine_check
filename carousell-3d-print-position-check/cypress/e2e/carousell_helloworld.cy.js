describe('My First Test https://www.carousell.com.hk/', () => {
  it('Visits https://www.carousell.com.hk/', () => {
    cy.viewport('macbook-16');

    cy.visit('https://www.carousell.com.hk/');

    cy.screenshot();
  });
});
