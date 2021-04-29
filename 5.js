// Contar Positivos -  Dado un array de números, crea una función para reemplazar 
//el último valor con el número de valores positivos encontrados en el array. 
//Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function contar(arr){
    var positivos = [];
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>0){
            positivos.push(arr[i]);
        }
    }
    arr[arr.length-1] = positivos.length;
    return arr;
}
console.log(contar([3,4,5,-5,-6,-7,9,10,20,30]));
