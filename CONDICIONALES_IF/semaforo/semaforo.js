//MODELO 1 - SIN PROMPT
/*
var colorSemaforo = "amarillo";
if (colorSemaforo == "verde") 
    console.log ("Puedes pasar");
else if (colorSemaforo == "amarillo") 
    console.log ("Ten precaución");
else if (colorSemaforo == "rojo")
    console.log("¡Detente!")
else
    console.log ("Lo siento, este valor no es válido :(");
*/


//MODELO 2 - CON PROMPT
var colorSemaforo = prompt("Escoge el color del semáforo");
if (colorSemaforo == "verde"){
    console.log ("Puedes pasar")
}
    else if (colorSemaforo == "amarillo"){
        console.log ("Ten precaución")
    }
    else if (colorSemaforo == "rojo"){
        console.log ("¡Detente")
    }
    else{
        console.log ("Lo siento, este valor no es váliido :(")
    }
