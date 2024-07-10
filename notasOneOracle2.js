//escribir con camell algo. por que variables quedan con la joronbba de camello

//template strings. comillas invertidas

//extension live server sirve para que se vaya guardadno automaticamente los cambios hechos en mi codigo sin necesidad de dar f5
//se puede abrir asi mismo, con live server y este renderiza automaticamte el codigo de vscode



// Otros tipos de operadores lógicos

// Operador	Nombre	Ejemplo	Resultado
// ==	Igual	A == B	Verdadero si A es igual a B
// !=	Diferente	A != B	Verdadero si A no es igual a B
// <	Menor que	A < B	Verdadero si A es menor que B
// >	Mayor que	A > B	Verdadero si A es mayor que B
// <=	Menor o igual	A <= B	Verdadero si A es menor o igual a B
// >=	Mayor o igual	A >= B	Verdadero si A es mayor o igual a B



// Operador	Nombre	Ejemplo	Resultado
// &&	Y / AND	(A > B) && (B == C)	Verdadero si A es mayor que B y B es igual a C
// ||	O / OR	(A > B) || (B == C)	Verdadero si A es mayor que B o B es igual a C
// !	NEGACIÓN	!(A == B)	Verdadero si A NO es igual a B


el uso del break es importante para romper un while 


//lo facil que es usar operador ternario:
 ´${ intentos == 1 ? 'vez' : 'veces' }´ 

let numero = Math.floor(Math.random() * 10 + 1);
console.log(numero)// me permite generar un numero del 1-10 sin decimales

 


// En esta lección, vimos cómo usar la documentación para generar un número aleatorio a través de la documentación de Mozilla. Sin embargo, también existe W3Schools (W3S), que es un recurso en línea ampliamente conocido y utilizado para aprender diversas tecnologías de desarrollo web, incluido JavaScript (JS).El sitio web ofrece tutoriales interactivos, ejemplos de código, referencias de sintaxis y conceptos fundamentales relacionados con JavaScript y otros lenguajes web.



//////////
los eventos en html siempre se encuentran con on , de en , cuando
////////



///// Funcion para llenar de texto un eleemnto html

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //que se vuelva buena practi8ca usar el return 
}
///////




//////

<input type="number" id="valorUsuario" min="1" max="10" class="container__input"></input> // este reemplaza al prompt. importante ver todo lo que se le puede poner
//recordar que prompt y input suelen retornarme valores tipo string

//////


////////////////

La diferencia entre parseInt y Number es que parseInt convierte una cadena de texto a un número entero, mientras que Number convierte una cadena de texto a un número, que puede ser entero o decimal.
//////////////


/////////////
pra buscar cosas usar el `mdn` 

///////////



/////

console.log(jsd===jkas)// imprime solo si es verdadero
/////


/////////////
el atributo disabled casi funciona como el.nactive de camkatstore
//asi se deshabilita para que permita aparecer el contenido:
        document.getElementById('reiniciar').removeAttribute('disabled');
//ahora, asi se habilita, para que desaparezca el contenido:
document.querySelector('#reiniciar').setAttribute('disabled','true');
/////////



///////////////////
Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.
//////////////////


// ejercicios a resolver:


//Desafíos:
//1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
//2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.


function calcularFactorialNumero(numero) {
    while (numero > 1) {
        numeroMultiplicar = numero;
        numero--
    }
}

calcularFactorialNumero(6);


let vari = 0;
function calcularFactorialNumero(numero) {
for (let i=numero; i > 1; i--) {
     vari= numero - 1;
}
    console.log(vari)
calcularFactorialNumero(6);

//3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.


//4 Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
//5 Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.


//6 Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.


///todos estan resuletos en Aula 3 por mi




///////////////////////
    
 La línea listaNumerosSorteados.includes(numeroGenerado) utiliza el método includes de JavaScript para verificar si el valor numeroGenerado ya existe en el array listaNumerosSorteados. Aquí está la explicación detallada de cómo funciona:

includes Method
El método includes se usa para determinar si un array contiene un determinado elemento. Devuelve true si el elemento está presente en el array y false en caso contrario.
/////////////////////




////////////////////
la recursividad es cuando se llama desde una funcion a la misma funcion (tener cuidado con la condicion de salida, para que no se cree un buccle infinito)
//////////////////


//////////////////
        .push para indexar
        .pop para borrar ultimo elemento
/////////////////