alert ("Conectado")
/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

let phrase = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado'
const estudiantes = phrase.match(/estudiante/g);
console.log(estudiantes)   

console.log(phrase.replaceAll("estudiante", "koder"))




/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo" */
//conseguir 2 strings
/*
let string1="addd";
let string2="a";

//Crear funcion
function myFunction(strng1,strng2){
  let response =""
  
  //conseguir longitud destrings
  let txtLength1=strng1.length;
	let txtLength2=strng2.length;
  
  //comparar longitud de strings
  if(txtLength1 < txtLength2){
    response="string2 is longer"
  }else{
    response="string1 is lagrer";
  }
  return response
}

console.log(myFunction(string1,string2))




/*
Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
/*
function comparacionDePalabras(){
    let enunciado=prompt("Ingrese algún string con dos palabras");
let longitudEnunciado=Number(enunciado.length);
enunciado.indexOf(" ");
posicionEspacio=Number(enunciado.indexOf(" "))
let primeraPalabra=enunciado.slice(0, posicionEspacio);
let longituPrimetaPalabra=primeraPalabra.length
let segundaPalabra=enunciado.slice(posicionEspacio, longitudEnunciado);
let longitudSegundaPalabra=segundaPalabra.length;

if(longituPrimetaPalabra>longitudSegundaPalabra){
    console.log("La palabra mas larga es: ", primeraPalabra);
}else{
    console.log("La segunda palabra es mas larga: ", segundaPalabra);
}
}
comparacionDePalabras();


/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/
/*
function numberssum(){
    let num1 = prompt ('Dame el primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    let ope = num1 + num2;
    answer(ope,num1,num2)
}
function numbersrest(){
    let num1 = prompt ('Dame el primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    ope = num1 - num2;
    answer(ope,num1,num2)
}
function numbersdiv(){
    let num1 = prompt ('Dame el primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    ope = num1 / num2;
    answer(ope,num1,num2)
}
function numbersmul(){
    let num1 = prompt ('Dame eml primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    ope = num1 * num2;
    answer(ope,num1,num2)
}
function answer(ope,num1,num2){
    console.log('El resultado de tu operación es: ',ope, 'Tus números fueron: ',num1, num2)
}
let regsum = (/suma/gi)
function choose(){
    console.log(operaciones)
    let decision = prompt('¿Cuál de las siguientes operaciones quieres realizar?')
    switch (decision){
        case decision.match(regsum):
            numberssum();
            break
        case 'resta':
            numbersrest();
            break
        case 'division':
            numbersdiv();
        case 'multiplicación':
            numbersmul();
            break
        default :
        console.log('Tas loco mano')
    }
}
choose()

*/