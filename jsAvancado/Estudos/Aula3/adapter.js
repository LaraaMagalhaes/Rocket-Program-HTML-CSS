// Padrão Adapter: converte interfaces antigas para um novo formato

// Interface antiga 
class OldInterface {
    request(value, quantity) {
      const total = value * quantity;
      console.log("Total:", total);
    }
  }
  
  // Adapter: transforma o novo formato de dados para o antigo
  class NewInterfaceAdapter {
    constructor(oldInterface) {
      this.oldInterface = oldInterface;
    }
  
    // Recebe um objeto, extrai os valores e chama o método antigo
    request({ value, quantity }) {
      this.oldInterface.request(value, quantity);
    }
  }
  
  // Testando o adapter com o novo formato
  const old = new OldInterface();
  const adapter = new NewInterfaceAdapter(old);
  
  adapter.request({ value: 10, quantity: 3 }); // Total: 30
  