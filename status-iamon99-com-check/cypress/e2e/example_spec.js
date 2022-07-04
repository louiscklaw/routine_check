const view_ports = ['macbook-16'];

const orientations = ['portrait', 'landscape'];

describe('viewports', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('test viewport and orientation', () => {
    for (let i = 0; i < view_ports.length; i++) {
      let view_port = view_ports[i];
      for (let ii = 0; ii < orientations.length; ii++) {
        let orientation = orientations[ii];

        cy.viewport(view_port, orientation);
        cy.visit('https://status.iamon99.com');

        cy.get('#my-name').should('have.text', 'Louis Law');

        cy.screenshot();

        // cool down
        cy.wait(1000);
      }
    }
  });
});
