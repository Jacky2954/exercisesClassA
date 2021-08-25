/* En una página web del gobierno de México, la población mexicana tendrá que ingresar
para consultar si ya se puede vacunar en estas fechas. Por el momento no todos están aptos
para recibir la vacuna, por esto deberán responder algunas preguntas para saber si pueden
recibirla ahora o seguir esperando su turno 
LAS PERSONAS APTAS PARA LA VACUNACIÓN DEBEN CUMPLIR CON ESTAS CARACTERÍSTICAS:
- Ser mayor de 18 años y recidir en un municipio fronterizo del norte del pais.
- Ser madre gestante mayor de 18 años con más de 9 semanas de gestación.
- Cumplir este año 30 años o más.
*/

var recidencia = prompt("¿recides en un municipio fronterizo del norte del pais?")
var edad = prompt("¿Cuantos años estarás cumpliendo en el 2021?")
var embarazo = prompt ("¿Estás embarazada y tienes más de 9 semanas de gestación")

if (recidencia == "si" && edad >= 30)
    console.log("Ya te puedes vacunar")

else if (embarazo == "si" || embarazo == "no")
    if (edad >= 18)
    console.log("Ya te puedes vacunar")
    else{
         console.log("Lo siento, aún no te puedes vacunar")
    }

