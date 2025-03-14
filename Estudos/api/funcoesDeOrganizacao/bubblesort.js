function bubbleSortAlg(arrBubble) {
    for (let i = 0; i < arrBubble.length - 1; i++) {
       for (let j = 0; j < arrBubble.length - 1 - i; j++) {
        // Se o elemento atual for maior que o próximo, troca de canto
        if (arrBubble[j] > arrBubble[j + 1]) {
            let temp = arrBubble[j];
            arrBubble[j] = arrBubble[j + 1];
            arrBubble[j + 1] = temp;
          }
        }
      }
    return arrBubble;
  }
  
// exemplo de aplicação
let arrayBubble = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];
console.log(bubbleSortAlg(arrayBubble));
  