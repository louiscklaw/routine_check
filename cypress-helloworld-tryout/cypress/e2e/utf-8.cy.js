describe('utf-8.cy.js', () => {
  it('Visits https://www.w3.org/2001/06/utf-8-test/UTF-8-demo.html', () => {
    cy.visit('https://www.w3.org/2001/06/utf-8-test/UTF-8-demo.html');

    cy.screenshot();
  });
});
