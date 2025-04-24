// Padrão Decorator: adiciona funcionalidades a um objeto sem modificar ele diretamente

// Função que recebe um componente e adiciona um novo método
function decoratorComponente(componente) {
    componente.novaFuncionalidade = function () {
      console.log("Nova funcionalidade adicionada!");
    };
    return componente;
  }
  
  // Exemplo prático:
  const meuComponente = {};
  const componenteDecorado = decoratorComponente(meuComponente);
  
  componenteDecorado.novaFuncionalidade(); // Chama o novo método que foi adicionado
  