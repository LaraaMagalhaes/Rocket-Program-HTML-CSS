function insertionSortAlg(arrInsert) {
    for (let i = 1; i < arrInsert.length; i++) {
      let elemAtual = arrInsert[i];
      let j = i - 1;
      // enquanto o elemento na posição j for maior que atual, move para a direita
      while (j >= 0 && arrInsert[j] > elemAtual) {
        arrInsert[j + 1] = arrInsert[j];
        j--;
      }
      // Quando acha a posição correta, põe a atual
      arrInsert[j + 1] = elemAtual;
    }
    return arrInsert;
  }
  
// aplicação
let arrayInsertion = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];
console.log(insertionSortAlg(arrayInsertion));
  