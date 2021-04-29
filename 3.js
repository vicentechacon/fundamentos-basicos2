//Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
//La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function a(arr){
    for (i=0; i<arr.length; i++){
        if (arr[i]%2 !==0){
            var impar = arr[i];
            break;
        }
    }
    console.log(arr[arr.length-2]);
    return impar;
}
console.log(a([2,4,6,7]));