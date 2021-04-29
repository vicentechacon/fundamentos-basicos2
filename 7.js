//Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, 
//específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
//Luego, console.log cada valor del array y devuelve arr. 

function incrementar(arr){
    for(var i = 0; i<arr.length; i++){
        if (i%2 !== 0){
            arr[i] = 1;
        }
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementar([1,2,3,4,5,6,7,9,10,11,4,5,6,4,3,2,23,3,4,4,4,4,4,4,4,4,4,4]));