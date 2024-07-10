// Desafíos
// Crea una lista vacía llamada "listaGenerica".
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.



//solucion:

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguagesProgramacion(arrayLenguajes) {
    for (let i = 0; i < arrayLenguajes.length; i++) {
        let nombreLenguage = arrayLenguajes[i];
        console.log(nombreLenguage);
    }
    return
}
mostrarLenguagesProgramacion(lenguagesDeProgramacion);


// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.


let lenguagesDeProgramacion2 = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguagesDeProgramacion2.push('Java', 'Ruby', 'GoLang');
function mostrarInversoLenguagesProgramacion(arrayLenguajes) {
    let arrayReverse = arrayLenguajes.reverse();
    for (let i = 0; i < arrayReverse.length; i++) {
        let nombreLenguage = arrayReverse[i];
        console.log(nombreLenguage);
    }
    return
}
mostrarInversoLenguagesProgramacion(lenguagesDeProgramacion2);

// Crea una función que calcule el promedio de los elementos en una lista de números.

    let listaDeNUmeros2 = [1, 2, 3];
    let listaDeNUmeros = [5, 5, 4, 6, 4, 5, 6, 4, 6, 4, 5, 6, 4, 5];
    console.log(listaDeNUmeros);
function promedioListaNumeros(listaDeNUmeros) {
    let sumaElementos = 0;
        for (let i = 0; i < listaDeNUmeros.length; i++) {
            sumaElementos += listaDeNUmeros[i];
            console.log(sumaElementos);
    }
        console.log(sumaElementos);
    let promedioNumeros = sumaElementos / (listaDeNUmeros.length);
        console.log(promedioNumeros);
}
promedioListaNumeros(listaDeNUmeros2);



// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let arrayNumeros = [5, 3, 21,564];
function mostrarNumeroMasGrandeYPequeño(arrayNumeros) {
    for (let i = 0; i < arrayNumeros.length; i++) {
        let numeroComparar = arrayNumeros[i];
        for (let u = 0; u < arrayNumeros.length; u++) {
            if (numeroComparar > arrayNumeros[u]) {
                let numMasGrande = numeroComparar;
                console.log(numMasGrande);
                console.log(`${numeroComparar} es mas grande que ${arrayNumeros[u]}`);
            } else {
                console.log(`${numeroComparar} no  es mas grande que ${arrayNumeros[u]}`);
            }
            
        }
       
    }
}
mostrarNumeroMasGrandeYPequeño(arrayNumeros);




////
let arrayNumeros1 = [5, 3, 21, 564, 5, 3, 21, 564, 5, 3, 700, 564];
function mostrarNumeroMasGrande(array) {
    let numeroComparar;
    let comprobacion = false;
    let numeromasGrande;
    for (let i = 0; i < array.length; i++) {

        numeroComparar = array[i];

      for (let u = 0; u < array.length; u++) {

          if (numeroComparar >= array[u]) {
              comprobacion = true;
              numeromasGrande = numeroComparar;
          } else {
              comprobacion = false;
          }
          
        }
        
        if (comprobacion) {
            console.log(numeromasGrande);
        }
       
    }
}
mostrarNumeroMasGrande(arrayNumeros1);





///


function compararNumeros(parametro1,parametro2) {
    let comparacion = (parametro1 > parametro2);


    switch (parametro1,parametro2) {
        case parametro1 > parametro2:
            console.log(` ${parametro1} es el numero mayor`);
            break;
        case parametro1 == parametro2:
            console.log(` ${parametro1} es igual a ${parametro2}`);
            break;
        
        case parametro1 < parametro2:
            console.log(` ${parametro2} es el numero mayor`);
            break;
        default:
            break;
    }
    
    // if (comparacion) {
    //     console.log(` ${parametro1} es el numero mayor`);
    //     return parametro1;
    // } else {
    //     console.log(` ${parametro2} es el numero mayor`);
    //     return parametro2;
    // }
}
compararNumeros(6, 7);




// Crea una función que devuelva la suma de todos los elementos en una lista.


    let listaDeNUmeros3 = [5, 5, 4, 6, 4, 5, 6, 4, 6, 4, 5, 6, 4, 5];
   
function promedioListaNumeros(listaDeNUmeros3) {
    let sumaElementos = 0;
        for (let i = 0; i < listaDeNUmeros3.length; i++) {
            sumaElementos += listaDeNUmeros3[i];
            //console.log(sumaElementos);
    }
    return console.log(`la suma de todos los numeros es ${sumaElementos}`);
}
promedioListaNumeros(listaDeNUmeros3);



// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

let listaPalabras = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
function buscarPalabra(palabra) {
    let algo;
    
        if (listaPalabras.includes(palabra)) {
            for (let i = 0; i < listaPalabras.length; i++) { 
                if (listaPalabras[i] === palabra) {
                    console.log(`la posicion de esta palabra es ${i}`);
                }
            }
           
            
        } else {
            
            console.log(`(-1)Esta palabra no existe`);
            
        
        }
    
    
}
buscarPalabra('C++');


// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.