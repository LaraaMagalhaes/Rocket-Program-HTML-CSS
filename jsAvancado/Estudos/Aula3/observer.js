// Padrão Observer: um objeto notifica vários "ouvintes" quando algo acontece

class Assunto {
    constructor() {
      this.observers = []; // Lista de funções (os observers)
    }
  
    // Adiciona um novo observer
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    // Notifica todos os observers passando um dado
    notify(data) {
      this.observers.forEach((observer) => observer(data));
    }
  }
  
  // Criamos um "assunto" para ser observado
  const assunto = new Assunto();
  
  // Adicionamos dois observers que reagem à notificação
  assunto.subscribe((data) => {
    console.log("Observer 1 recebeu:", data);
  });
  
  assunto.subscribe((data) => {
    console.log("Observer 2 recebeu:", data);
  });
  
  // Disparamos uma notificação para todos
  assunto.notify("Notificação importante!");
  