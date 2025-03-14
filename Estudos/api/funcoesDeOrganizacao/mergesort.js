function mergeSortAlg(arrMerge) {
    // Caso base
    if (arrMerge.length <= 1) {
        return arrMerge;
    }
  
    // Divide o array em dois
    const meio = Math.floor(arrMerge.length / 2);
    const esquerda = arrMerge.slice(0, meio);
    const direita = arrMerge.slice(meio);
  
    // Ordena recursivamente e depois faz o merge
    return mergeAux(mergeSortAlg(esquerda), mergeSortAlg(direita));
  }
  
  function mergeAux(partLeft, partRight) {
    let resultado = [];
    let i = 0;
    let j = 0;
  
    // Percorre as metades, colocando sempre o menor elemento na saída
    while (i < partLeft.length && j < partRight.length) {
      if (partLeft[i] < partRight[j]) {
        resultado.push(partLeft[i]);
        i++;
      } else {
        resultado.push(partRight[j]);
        j++;
      }
    }
  
    // Concatena as metades
    return resultado
      .concat(partLeft.slice(i))
      .concat(partRight.slice(j));
  }
  
// aplicfaçãp:
let arrayMerge = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];
console.log(mergeSortAlg(arrayMerge));
  