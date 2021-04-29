//Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) 
// que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) 
//del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4].
// Pista: ¿For loops solo puede ir hacia adelante?

function similar(arr){
    var similar2 = [];
    similar2.push(arr[0]);
    for (var i = 1; i<arr.length; i++){
        similar2.push(arr[i-1].length);
    }
    return similar2;
}
console.log(similar(["programar","dojo", "genial"]));