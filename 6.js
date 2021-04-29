//Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
//imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function parcialidad(array){
    var rachapares = 0;
    var rachaimpares = 0;
    for (var i=0; i<array.length; i++){
        if (array[i] % 2 !== 0){
            rachaimpares = rachaimpares + 1;
            rachapares = rachapares * 0;
            if(rachaimpares % 3 === 0){
                console.log("Que Imparcial!");
            }
            
        }
        if (array[i]%2 ==0){
            rachapares = rachapares + 1;
            rachaimpares = rachaimpares * 0;
            if(rachapares % 3 === 0){
                console.log("Es para Bien!");
            }
        }
    }
    
}
(parcialidad([-1,-1,-1,3,3,3,4,4,4,5,4,3]));




//     var test = [];
//     for(var i=0; i<array.length; i++){
//         if (array[i] % 2 !==0){
//             array [i] = "impar"
//         }
//         if (array[i] % 2 == 0){
//             array[i] = "par" 
//         }
//     }
//     return array;
// }
// console.log(parcialidad([1,1,1,4,5,6,7,8]));
