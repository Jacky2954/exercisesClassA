/*Write a JavaScript function which will take an array of numbers stored and find the second 
lowest and second greatest numbers, respectively*/

//ordenar el array
//seleccionar el segundo menor y el segundo mayor

function order_array(array) {
  var datos = array.length;

  function comparar(a, b){
    return a - b;
  }
  array.sort(comparar);

  return(
    "El segundo menor" + array[1] + "y el segundo mayor " + array[datos - 2]
  );

} console.log( order_array([52, 36, 68, 25, 17, -52, 366, 6, 25, 3, -664]))



/*Write a JavaScript function that checks whether a passed string is palindrome or not? 
	Note: A palindrome is word, phrase, or sequence that reads 	the same backward as forward*/

  function esPlindromo (palabra){
    let array = palabra.split("");
    let reverse = array.reverse();

    return palabra == reverse.join("") ? "Si es" : "No es"
  }

  console.log(esPlindromo("oso"))
