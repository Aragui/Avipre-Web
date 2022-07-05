describe('Project page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://www.facebook.com/plugins/customer_chat/**', {});
        cy.visit('http://localhost:3000/casa-cholul');
    });

    it('Can render project', () => {
        cy.get('h1.title').contains('Casa Cholul');
    });

    it('Can show image viewer', () => {
        cy.wait(1000)
        cy.get('div.image-container').first().click();
    });

    it('Can click next button', () => {
        cy.wait(1000);
        cy.get('div.image-container').first().click();
        cy.get('button.right').click();
    });

    it('Can click previous button', () => {
        cy.wait(1000);
        cy.get('div.image-container').last().click();
        cy.get('button.left').click();
    });

    it('Can close image viewer', () => {
        cy.wait(1000);
        cy.get('div.image-container').first().click();
        cy.get('button.close').click();
    });

    it('Can see index', () => {
        cy.get('a[href="/"]').contains('Inicio').click();
    })

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