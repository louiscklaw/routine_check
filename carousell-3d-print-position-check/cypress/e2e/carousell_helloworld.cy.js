describe('My First Test https://www.carousell.com.hk/', () => {
  it('Visits https://www.carousell.com.hk/', () => {
    cy.visit('https://www.carousell.com.hk/');

    cy.screenshot();
  });
});
