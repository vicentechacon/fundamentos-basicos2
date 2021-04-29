//Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
//pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function negNum(arr){
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>1){
            arr[i] = arr[i]*-1;
        }
    }
    return arr;
}
console.log(negNum([-1,-2,3,4,5,6,7,8,8,-1]));