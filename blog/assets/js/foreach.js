

// function foreach(array, callbackFn){
//     for(let i = 0; i < array.length; i++){
//         callbackFn(array[i], i, array);
//     }
// }

// const lista = ["abacaxi", "mamao", "maça", "banana"];
const lista = [10, 5, 8, 4, 7, 1, 9, 6, 42, 97, 12, 9, 1, 5, 56, 96];

// foreach(lista, (a, b, c) => {
//     console.log("value: ", a);
//     console.log("index: ", b);
//     console.log("array: ", c);
//     console.log("--------------------------------------------------------------------");
// });

// lista.forEach((a, b, c) =>{
//     console.log("value: ", a);
//     console.log("index: ", b);
//     console.log("array: ", c);
//     console.log("--------------------------------------------------------------------");
// })

// const item = lista.filter((item) => item !== "maça");
// const item = lista.includes("maça");
// const item = lista.sort((a, b) =>{
//     return a - b;
// });

const item = lista.reduce((antigo, atual) =>{
    return atual + antigo;
}, 0);


console.log(item);