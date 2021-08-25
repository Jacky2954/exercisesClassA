//Ejercicio 1: 
/**
 * Construye un algoritmo bajo las siguientes reglas:
 * 
 * 1) Itera un arreglo utilizando un ciclo for
 * 2) Imprime en consola los valores que sean mayores 3
 * 
    var arr = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
 */


//Solución//
var arr = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
for (var i = 0; i < arr.length; i++){
    if (arr[i] > 3) console.log(arr[i]);
}


//Ejercicio 2:
/**
 * Construye un algoritmo bajo las siguientes reglas
 * 1) Declara un arreglo vacio
 * 2) Con un ciclo While que se ejecute 5 veces, agrega los elementos al array
 * Nota: recuerda incrementar la variable contador para que pueda incrementar el ciclo
 */

//Solución//

var arreglo1 = []
var arreglo2 = 0;
while (arreglo2 < 5) {
     arreglo2++;
    arreglo1.push(arreglo2);
    console.log(arreglo1)}



