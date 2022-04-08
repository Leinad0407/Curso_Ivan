/* alert("Está enlazado")

function sumar (num1, num2){
    return num1+num2
};

let resultadosumar= sumar(1,15);
console.log(resultadosumar) 


let usuario=console.log(prompt("ingresa un numero")); */

alert ("Ya esta enlazado");

/*ejercicio 1:
pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números*/

console.log("Este es un programa para realizar operacioenes de suma, resta, multiplicacion, division y modulo; de dos numeros ingreados por el usuario");
 num1=Number(prompt("Ingresa el primer número"));
 num2=Number(prompt("Ingresa el segundo número"));

function operaciones(firstNumber, SecondNumber){
  console.log("El resultado de la suma es: ", firstNumber+SecondNumber)
  console.log("El resultado de la resta es: ", firstNumber-SecondNumber)
  console.log("El resultado de la multiplicacion es: ", firstNumber*SecondNumber)
  console.log("El resultado de la division es: ", firstNumber/SecondNumber)
  console.log("El resultado de la potencia es: ", firstNumber ** (SecondNumber))
  console.log("El resultado del modulo es: ", firstNumber % SecondNumber)
  if(firstNumber>SecondNumber){
      console.log("Elprimer numero es mayor que el segundo")
  }else if(firstNumber<SecondNumber){
      console.log("El segundo numero es mayor que el primero")

  }else{
      console.log("Son iguales")
  }

}
operaciones(num1, num2)

/*ejercicio 2:
pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo*/







