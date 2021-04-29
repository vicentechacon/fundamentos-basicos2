//Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
//Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function imprime(arr);
for(var i = 0; i<arr.length; i++){
    if (arr[i]="comida"){
        console.log("yummy");
    }
    else {
        console.log("tengo hambre");
    }
}
console.log(imprime(["perro","gato","comida","nada"]));