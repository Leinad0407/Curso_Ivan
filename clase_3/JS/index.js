alert ("Estoy conectado")
/*
//Ejercicios
//Ejercicio 1
 let letra1 =  prompt('Ingrese una letra');
 let letra2 =  prompt('Ingrese otra letra');
 
 letrasAlfabeto(letra1,letra2);
 function letrasAlfabeto(letra1, letra2){
         if(letra1 < letra2){
             console.log("la letra " + letra1 +" aparece antes en el alfabeto");
         } else {
             console.log("la letra " + letra2 +" aparece antes en el alfabeto");
         }
 }
//Ejercicio 2
  const numero1 =  prompt("Ingrese un numero1");
  const numero2 =  prompt("Ingrese otro numero2");
  operaciones(numero1,numero2);
 function operaciones(numero1, numero2){
     // console.log(numero1);
     // console.log(numero2);
     numero1 = Number(numero1);
     numero2 = Number(numero2);
     console.log(typeof(numero1));
     console.log(typeof(numero2));
 
 
     if (numero1 > numero2){
         let divison = numero1 / numero2;
         console.log("El resultado del a division es: " + divison);
     } else if(numero1 < numero2){
         let sumar = numero1 + numero2;
         console.log("El resultado de la suma: " + sumar);
     } else if (numero1 = numero2){
         let mutiplicar = numero1 * numero2;
         console.log("El resultado de la multiplicacion: " + mutiplicar);
     }
 }
//Ejercicio 3
 const numero =  prompt("Ingrese un numero entre el 1 y el 100");
 parImpar(numero);
 function parImpar(numero){
     numero = Number(numero);
  
     if (numero%2 == 0){
         console.log("Es par");
     }else {
         console.log("Es impar");
     }
 }
//ejercicio 4
 const nombre = prompt("Ingresa tu nombre");
 const pesoEnLaTierra =  prompt("Ingresa tu peso");
 //pesoPersona(nombre,pesoEnLaTierra);
 function pesoPersona(nombre, pesoEnLaTierra){
     peso = Number(pesoEnLaTierra);
     const gravedad = 9.81;
     let masa = pesoEnLaTierra / gravedad;
     const gravedadEnLaLuna = 1.622;
     let pesoEnLaLuna = masa*gravedadEnLaLuna;
     console.log("El peso de " + nombre + "en la luna es: " + pesoEnLaLuna);
//     //Luna = (Peso en la Tierra/9,81m/s2) * 1,622m/s2
 }
// pesoPersona2();
// function pesoPersona2(nombre, pesoEnLaTierra){
//     peso = Number(pesoEnLaTierra);
//     const gravedadEnLaLuna = (1.622/(1.622+9.8))*100;
//     console.log(gravedadEnLaLuna);
//     // let gravedad = 9.81;
//     // let masa = pesoEnLaTierra / gravedad;
    
//     // let pesoEnLaLuna = masa*gravedadEnLaLuna;
//     // console.log("El peso de " + nombre + "en la luna es: " + pesoEnLaLuna);
    
//     //Luna = (Peso en la Tierra/9,81m/s2) * 1,622m/s2
// }

*/


//Ejercicios de práctica
/*1- Evaluar una calificacion
-Solicitar una calificacion al usuario de 0 a 100
-Evaluemos con un if si su calificacions es A, B, C, D, E, etc
-Mostremos con un switch su calificacion. 
	
Calificaciónes
< 60  calificacion 'F'
< 70 calificacion 'D'
< 80 calificacion C
< 90 calificacion B
< 100 calificacion A 

console.log("Elige alguna de las siguientes opciones")
console.log("1.- Mi calificación esta entre 90 y 100")
console.log("2.- Mi calificación esta entre 80 y 90")
console.log("3.- Mi calificación esta entre 70 y 80")
console.log("4.- Mi calificación esta entre 60 y 70")
console.log("5.- Mi calificación es menor de 60")
const calificacion= prompt("Introduce el caso que describa mejor tu situación");
console.log("La opcion introducidad es: ", calificacion)
switch (calificacion){
    case "1":
        console.log("Tienes A, eres un orgullo para tu nación");
        break;
    case "2":
        console.log("Tiene B, es un orgullo para su nación!");
        break;
    case "3":
        console.log("Tiene C");
        break;
    case "4":
        console.log("Tiene D");
        break;
    case "5":
        console.log("Tiene F");
        break;
    default:
        console.log("Solo intriduce el porcentaje en un rango del 0 al 100");
        break;

} 
*/
/*--------------------------------*/

/* Ejercicios de práctica
1- Evaluar una calificacion
-Solicitar una calificacion al usuario de 0 a 100
-Evaluemos con un if si su calificacions es A, B, C, D, E, etc
-Mostremos con un switch su calificacion. 
	
Calificaciónes
< 60  calificacion 'F'
< 70 calificacion 'D'
< 80 calificacion C
< 90 calificacion B
< 100 calificacion A 

const calificacion=Number(prompt("Introduce tu puntaje"))
console.log("La calificaciion introducida es: ", calificacion);

function miCalificacion(calificacion){
    if(calificacion>=90 && calificacion<=100){
        return "1"
    }else if(calificacion>=80 && calificacion<90){
        return "2"
    }else if(calificacion>=70 && calificacion<80){
        return "3"
    }else if(calificacion>=60 && calificacion<70){
        return "4"
    }else if(calificacion>=0 && calificacion<60){
        return "5"
    }else{
        return "Introduce solo una numeracion del 1 al 100"
    }
}
miCalificacion(calificacion);

opcionCalificacion=miCalificacion(calificacion);

switch (opcionCalificacion){
    case "1":
        console.log("Tienes A, eres un orgullo para tu nación");
        break;
    case "2":
        console.log("Tiene B, es un orgullo para su nación!");
        break;
    case "3":
        console.log("Tiene C");
        break;
    case "4":
        console.log("Tiene D");
        break;
    case "5":
        console.log("Tiene F");
        break;
    default:
        console.log("Solo intriduce el porcentaje en un rango del 0 al 100");
        break;

}
*/
/*2- Casa de cambio

Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo: 

1-¿Que cantidad en MXN deseas convertir ?
R= 1500 MXN
2¿A que pais vas a viajar?
R= USA

salida de la funcion: '$1500MXN (moneda local elegida por el usuario) equivale a $750USD(moneda del pais ingresado por el usuario)'

Considerar minimo 4 tipo de monedas

output:  '100 MXN equivale a 50 USD' */

let cantidadAcambiar=Number(prompt("¿Qué cantidad de dinero MXN vas a cambiar?"));
console.log("Escribe a corder al siguiente menú el país al que vas a viajar");
console.log("Estados Unidos");
console.log("Canada");
console.log("Brazil");
console.log("Italia");
paisViaje=prompt("El pais al que voy a viajar es:")

let equivalencia=0;

function cambio(pais, cantidad){
    if(pais==="Estados Unidos"){
        let equivalencia=cantidad*0.050
        respuesta=`${equivalencia} dolares estadounidenses`
    }else if(pais==="Canada"){
        let equivalencia=cantidad*0.063
        respuesta= `${equivalencia} dolares canadienses`
    }else if(pais==="Brazil"){
        let equivalencia=cantidad*0.23
        respuesta= `${equivalencia} reales brasileños`
    }else if(pais==="Italia"){
        let equivalencia=cantidad*0.46
        respuesta= `${equivalencia} euros`
    }else{
        console.log("Elige una opcion del menu")
    }
    return respuesta
}
cambio(paisViaje, cantidadAcambiar)

resultado=cambio(paisViaje, cantidadAcambiar)
console.log("El equivalente de su cantidad de ",cantidadAcambiar, "MXN en el pais de ", paisViaje, "es de" , respuesta)


/*Equivalencia en pesos mexicanos*/
/*1 peso=0.050 UDS
  1 peso = 0.063 dlres cadadienses
  1 peso=0.23 reales brazileños
  1 peso = 0.46 euros */