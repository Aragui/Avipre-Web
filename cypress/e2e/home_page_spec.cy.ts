describe('Home page', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://www.facebook.com/plugins/customer_chat/**', {});
    cy.visit('http://localhost:3000');
  });

  it('Can be rendered', () => {
    cy.get('h3').contains('Proyectos');
  })

  it('Click project', { scrollBehavior: false }, () => {
    cy.get('a.w-100').first().click();
  });

  it('Can see projects', () => {
    cy.get('a[href="/#proyectos"]').click();
  });

  it('Can see machinery', () => {
    cy.get('a[href="/#maquinaria"]').click();
  });

  it('Can see location', () => {
    cy.get('a[href="/#ubicacion"]').click();
  });
})

export {}