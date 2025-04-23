// Criando um objeto literal simples
const obj = {
    name: "Felipe"
  };
  console.log(obj);
  
  // Esse método toString não está no meu objeto diretamente,
  // mas sim no protótipo herdado de Object!
  console.log(obj.toString());
  
  
  // Simulando uma "classe" com função construtora
  function Pessoa(nome) {
    this.nome = nome;
  }
  
  // Aqui estou adicionando o método "falar" no protótipo da função Pessoa.
  // Isso economiza memória porque todas as instâncias vão compartilhar esse método.
  Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
  
  const pessoa1 = new Pessoa("Felipe");
  pessoa1.falar(); // Deve imprimir: Meu nome é Felipe
  
  
  // Outra forma de criar objetos com herança: Object.create()
  const proto = {
    falar: function () {
      console.log(`Meu nome é ${this.nome}`);
    }
  };
  
  const pessoa2 = Object.create(proto);
  pessoa2.nome = "Felipe";
  pessoa2.falar(); // Também imprime: Meu nome é Felipe
  
  
  // Criando um método personalizado no prototype de String
  // Esse método transforma a primeira letra de cada palavra em maiúscula
  String.prototype.toCapitalize = function () {
    return this.toString()
      .split(" ")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  };
  
  const frase = "olá, mundo e desenvolvedores de qualquer lugar";
  console.log(frase.toCapitalize()); // Olá, Mundo E Desenvolvedores De Qualquer Lugar
  
  // Testando em outra string
  console.log("e aí, pessoal".toCapitalize()); // E Aí, Pessoal
  