alert ("Conectado ando")

/*Ejercicio 1:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre 

    const nombreCompleto=prompt("Ingrese su nombre completo");

    function longitudNombre(algunNombre){
        let laLongitudNombre=algunNombre;
        console.log(laLongitudNombre.length);
    }
    longitudNombre(nombreCompleto) */

/* Ejercicio 2:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene. */
    let nombreCompleto=prompt("Ingresa tu nombre completo")
    let nombre =nombreCompleto;
    let vocalA = nombre.match(/a/gi);
    let vocalE = nombre.match(/e/gi);
    let vocalI = nombre.match(/i/gi);

    let numeroVocalA = vocalA.length;
    let numeroVocalE = vocalE.length;
    let numeroVocalI = vocalI.length;
   

    let total=numeroVocalA+numeroVocalE+numeroVocalI;
    console.log("En total su nombre contiene", total, "vocales")
