const view_ports = [
  'ipad-2',
  'ipad-mini',
  'iphone-3',
  'iphone-4',
  'iphone-5',
  'iphone-6',
  'iphone-6+',
  'iphone-7',
  'iphone-8',
  'iphone-x',
  'iphone-xr',
  'iphone-se2',
  // 'macbook-11',
  'macbook-13',
  'macbook-15',
  'macbook-16',
  'samsung-note9',
  'samsung-s10',
];

const orientations = ['portrait', 'landscape'];

describe('viewports', () => {
  it('cypress self test', () => {
    expect(true).to.equal(true);
  });

  it('louiscklaw.github.io viewport test', () => {
    for (let i = 0; i < view_ports.length; i++) {
      let view_port = view_ports[i];
      for (let ii = 0; ii < orientations.length; ii++) {
        let orientation = orientations[ii];

        cy.viewport(view_port, orientation);
        cy.visit('https://louiscklaw.github.io');

        cy.get('h1').should('have.text', 'Hi, I am louis');

        cy.screenshot();

        // cool down
        cy.wait(1000);
      }
    }
  });
});
