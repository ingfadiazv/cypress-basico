require('cypress-xpath');

class ModuloElemento {
  
  // Getter para los selectores
  get selectores() {
    return {
      elemento: () => cy.contains('Elements')
    };
  }

  // Método para hacer clic en el elemento
  click_elemento() {
    this.selectores.elemento().click();
  }

  // Método que llama a click_elemento y puede realizar otras acciones
  ingresar_elemento() {
    this.click_elemento();
    // Puedes agregar otras acciones aquí si es necesario
  }
}

export default new ModuloElemento();