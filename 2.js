//Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome
//un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.
function a(arr){
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr [i]>max){
        max = arr[i];
        }
        if (arr [i]<min){
            min = arr [i];
        }
    }
    console.log(min);
    return max;
}
console.log(a([10,-3,6,5,7]));
