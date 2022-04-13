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
    let numerovocalA=0
    let numerovocalE=0
    let numerovocalI=0
    let numerovocalO=0
    let numerovocalU=0
    
    let nombreCompleto=prompt("Ingresa tu nombre completo")
    let nombre =nombreCompleto;

    function vocalesEnTuNombre(){
    let vocalO = nombre.match(/o/ig);
    let vocalA = nombre.match(/a/gi);
    let vocalE = nombre.match(/e/gi);
    let vocalI = nombre.match(/i/gi);
    let vocalU = nombre.match(/u/gi);

    if(vocalA===null){
        numerovocalA=0;
    }else{
        numerovocalA=vocalA.length
    }
    console.log("Hay ", numerovocalA, "vocales A")

    if(vocalE===null){
        numerovocalE=0;
    }else{
        numerovocalE=vocalE.length
    }
    console.log("Hay ", numerovocalE, "vocales E")
    
    if(vocalI===null){
        numerovocalI=0;
    }else{
        numerovocalI=vocalI.length
    }
    console.log("Hay ", numerovocalI, "vocales I")

    if(vocalO===null){
        numerovocalO=0;
    }else{
        numerovocalO=vocalO.length
    }
    console.log("Hay ", numerovocalO, "vocales O")

    if(vocalU===null){
        numerovocalU=0;
    }else{
        numerovocalU=vocalU.length
    }
    console.log("Hay ", numerovocalU, "vocales U")

    let total=numerovocalA + numerovocalE + numerovocalI + numerovocalO + numerovocalU;

    console.log(" El total de las vocales en tu nombre es: ", total, "vocales")
    }
    vocalesEnTuNombre()