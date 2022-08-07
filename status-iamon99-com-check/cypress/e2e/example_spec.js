const view_ports = ['macbook-16'];

const orientations = ['portrait', 'landscape'];

describe('status.iamon99.com', () => {
  it('test https://status.iamon99.com', () => {
    for (let i = 0; i < view_ports.length; i++) {
      let view_port = view_ports[i];
      for (let ii = 0; ii < orientations.length; ii++) {
        let orientation = orientations[ii];

        cy.viewport(view_port, orientation);
        cy.visit('https://status.iamon99.com');

        cy.get('.title', { timeout: 10000 }).should('be.visible');

        cy.get('.title').should('have.text', 'Uptime Kuma');

        cy.screenshot();

        // cool down
        cy.wait(1000);
      }
    }
  });
});
