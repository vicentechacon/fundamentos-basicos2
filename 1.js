//Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos
// en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function change(array){

    for (var i = 0; i < array.length; i++){
        if (array[i] < 0){
            array[i]="big";
        }
    }
    return array;
}
console.log(change([-1,3,-2,5,-6]));