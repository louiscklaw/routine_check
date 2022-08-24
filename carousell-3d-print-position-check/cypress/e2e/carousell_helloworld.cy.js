describe('My First Test https://www.carousell.com.hk/', () => {
  it('Visits https://www.carousell.com.hk/', () => {
    cy.visit('https://www.carousell.com.hk/');

    cy.xpath('(.//input[@placeholder="Search for an item"])[1]').type('3D 代客打印');

    cy.screenshot();
  });
});
