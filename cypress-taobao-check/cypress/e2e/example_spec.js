// https://docs.cypress.io/api/commands/find
import sha256 from 'sha256';

describe('www_example_com', () => {
  it('landing login page', () => {
    cy.viewport(1920, 5080);
    cy.visit('http://www.example.com/');
  });

  it('example check changed', () => {
    cy.get('body').then(function ($elem) {
      // text ignore and cleaning here
      // text ignore and cleaning here

      if (sha256($elem.text()) != '690fe5ea036d21a8ccda0c32c04c608f80583b65aac740a70011e2289316fd3a') {
        cy.log('text changed');
        cy.log(sha256($elem.text()));
        cy.log($elem.text());
      }
    });
  });
});
