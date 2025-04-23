// String – métodos básicos
const texto = "  exemplo de texto  ";

console.log(texto.trim());       // Remove espaços dos dois lados
console.log(texto.trimStart()); // Só do início
console.log(texto.trimEnd());   // Só do fim
console.log("Olá".toLowerCase());   // tudo minúsculo
console.log("olá".toUpperCase());   // tudo maiúsculo


// padStart/padEnd – preenchimento com caracteres
const numText = "1";
console.log(numText.padStart(4, "0")); // vira "0001"
console.log(numText.padEnd(4, "0"));   // vira "1000"


// includes – verifica se uma string contém outra
const frase2 = "Olá mundo";
console.log(frase2.includes("mundo"));       // true
console.log(frase2.includes("mundo", 5));    // true (começa a buscar da posição 5)


// replace e toFixed – manipulação de strings e números
const valor = 123.456;
console.log(valor.toFixed(2).replace(".", ",")); // "123,46" → útil para moeda em pt-BR


// toPrecision e toString com base
console.log(valor.toPrecision(4));     // ex: "123.5"
console.log((255).toString(16));       // "ff" → hexadecimal
console.log((10).toString(2));         // "1010" → binário


// Array – push, pop, shift, unshift
const frutas = ["maçã", "banana"];
frutas.push("laranja");   // adiciona no fim
console.log(frutas);      // ["maçã", "banana", "laranja"]

console.log(frutas.pop()); // remove do fim → retorna "laranja"
console.log(frutas);       // ["maçã", "banana"]

frutas.shift();           // remove do início → "maçã"
console.log(frutas);      // ["banana"]

frutas.unshift("maçã");   // adiciona no início
console.log(frutas);      // ["maçã", "banana"]


// slice e splice
const citricos = frutas.slice(0, 2); // copia do índice 0 até 1 (2 não incluso)
console.log(citricos);    // ["maçã", "banana"]

// splice: insere "kiwi" na posição 1, sem deletar nada
frutas.splice(1, 0, "kiwi");
console.log(frutas);      // ["maçã", "kiwi", "banana"]


// forEach – só itera (não retorna nada)
frutas.forEach(fruta => {
  console.log(fruta);   
});


// map – itera e cria novo array
const numeros = [1, 2, 3];
const dobro = numeros.map(num => num * 2);
console.log(dobro);       // [2, 4, 6]


// filter – cria novo array com base em condição
const pares = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log(pares);       // [2, 4]


// reduce – reduz tudo a um único valor
const soma = [1, 2, 3, 4, 5].reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);        // 15
