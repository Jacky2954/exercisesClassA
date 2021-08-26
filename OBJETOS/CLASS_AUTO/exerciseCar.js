/*
Classes were added in last version of JavaScript (called ECMAScript 6 or just ES6). 
It's something similar to how classes work in other languages (Java, Ruby, etc). 
This is a very important concept in programming, so sooner or later you'll want to learn about it. 
(And I highly recommend you to do it before the Java modules).


Create a  Car class:

1) Add properties like model, so you can create a "Ford" with model "Mondeo". 
Add the properties you like in the constructor method.
2) Add a method to accelerate
3) Add a method to stop
4) Add a method turn directions
5) Add a method call status to display the information of the car (properties, methods, etc)

Instance at least 2.
*/

// modelo: Mondeo; cambio:automático; conbustible:hibrido; potencia:187 CV; año:2019; precio: 25.694€
class CreateFord {
    constructor(modelo, cambio, conbustible, potencia, año, precio){
        this.modelo = modelo;
        this.cambio = cambio;
        this.conbustible = conbustible;
        this.potencia = potencia;
        this.año = año;
        this.precio = precio;
    }
    
    acelerar(kmHr) {
        this.kmHr = kmHr;
        return kmHr;
    }

    frenar(metros) {
        this.metros = metros;
        return metros;
    }

    direccionGiro(instrucion) {
        this.instrucion = instrucion;
        return instrucion;
    }
}

const ford = new CreateFord ("Mondeo", "automático", "híbrido", "187CV", 2019, "25.694€")
console.log(ford)
ford.acelerar(70)
ford.frenar(27)
ford.direccionGiro("izquierda")

