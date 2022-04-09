alert ("Conectado ando")

/*Ejercicio 1:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre */

    const nombreCompleto=prompt("Ingrese su nombre completo");

    function longitudNombre(algunNombre){
        let laLongitudNombre=algunNombre;
        console.log(laLongitudNombre.length);
    }
    longitudNombre(nombreCompleto)

    /*
Ejercicio 2:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

let text = prompt("Ingresa tu nombre completo");
text.match(/a/g);
console.log(text.match(/a/g))


