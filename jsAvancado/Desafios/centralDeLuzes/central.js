class CentralDeLuzes {
    constructor() {
      this.estados = {};
    }
  
    ligar(comodo) {
      this.estados[comodo] = true;
    }
  
    desligar(comodo) {
      this.estados[comodo] = false;
    }
  
    estaLigada(comodo) {
      return !!this.estados[comodo];
    }
    static getInstance() {
      if (!CentralDeLuzes._instance) {
        CentralDeLuzes._instance = new CentralDeLuzes();
      }
      return CentralDeLuzes._instance;
    }
  }
  