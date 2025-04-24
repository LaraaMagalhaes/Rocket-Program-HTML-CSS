// Singleton: garante que só exista uma única instância da classe
class Data {
    static Instance; // Propriedade estática que guarda a única instância
  
    constructor(dado) {
      // Se já existir uma instância, retorna ela
      if (Data.Instance) {
        return Data.Instance;
      }
  
      // Se não existir, define o this como a instância única
      this.data = dado;
      Data.Instance = this;
    }
  }
  
  // Vamos testar: criamos duas "instâncias" com dados diferentes
  const instancia1 = new Data("Eu sou único");
  console.log(instancia1.data); // Mostra "Eu sou único"
  
  const instancia2 = new Data("Eu também sou único");
  console.log(instancia2.data); // Também mostra "Eu sou único" — é a mesma instância!
  
  // Aqui comprovamos que ambas são o mesmo objeto
  console.log(instancia1 === instancia2); // true
  