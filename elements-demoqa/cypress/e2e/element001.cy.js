// Describe la suite de pruebas para la página de DemoQA
describe('DemoQA Elements Page Navigation', () => {
  // Prueba para verificar la navegación a la sección Elements
  it('Debería navegar a la sección Elements al hacer clic en Elements', () => {
    // Visitar la página principal
    cy.visit('https://demoqa.com/');

    // Buscar y hacer clic en el elemento 'Elements'
    cy.contains('Elements').click();
    // Opcional: verificar que el encabezado o algún elemento específico esté visible
    cy.get('.header-text').should('be.visible').and('contain.text', 'Elements');


    // Verificar que la URL cambió a la página de Elements
    cy.url().should('include', '/elements');

    // Opcional: verificar que el encabezado o algún elemento específico esté visible
    // cy.get('.main-header').should('contain.text', 'Elements');
  });
});