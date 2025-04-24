Array.prototype.meuMap = function(callback) {
    const resultado = [];
    for (let i = 0; i < this.length; i++) {
      resultado.push(callback(this[i], i, this));
    }
    return resultado;
  };
  
  Array.prototype.meuFilter = function(callback) {
    const resultado = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        resultado.push(this[i]);
      }
    }
    return resultado;
  };
  
  Array.prototype.meuReduce = function(callback, valorInicial) {
    let acumulador = valorInicial;
    let i = 0;
    if (acumulador === undefined) {
      acumulador = this[0];
      i = 1;
    }
    for (; i < this.length; i++) {
      acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
  };
  
  Array.prototype.meuForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  
  
  const numeros = [1, 2, 3];
  
  const dobrados = numeros.meuMap(n => n * 2);
  console.log("meuMap:", dobrados);
  
  const pares = numeros.meuFilter(n => n % 2 === 0);
  console.log("meuFilter:", pares);
  
  const soma = numeros.meuReduce((acc, val) => acc + val, 0);
  console.log("meuReduce:", soma);
  
  console.log("meuForEach:");
  numeros.meuForEach((n, i) => {
    console.log(`Índice ${i}: ${n}`);
  });
  