// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
//Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doble(arr){
    var doble = []
    for(i=0; i<arr.length; i++){
        arr[i] = arr[i]*2
        doble.push(arr[i])
    }
    return doble;
}
console.log(doble([100000,45544545,13]))
