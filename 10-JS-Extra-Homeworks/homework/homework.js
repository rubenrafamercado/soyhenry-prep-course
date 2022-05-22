// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  array = []
  for ( property in objeto ){
    array.push( [property, objeto[property]] )    
  }
  return array
}

function myTest1(){
  //objeto = { D: 1, B: 2, C: 3  }  
  fn = function(a){ return a }
  objeto = { D: 1, B: 2, C: fn  }  
  console.log( deObjetoAmatriz(objeto))
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  numberOfCharacters = {}
  for ( i = 0 ; i < string.length; i++ ){
    if ( numberOfCharacters[string[i]] == undefined ){
      numberOfCharacters[string[i]] = 1
    }else{
      numberOfCharacters[string[i]] += 1
    } 
  }
  return numberOfCharacters
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  uppercases = ''
  lowercases = ''
  for ( i = 0; i < s.length; i++ ){
    if (s[i].toUpperCase() === s[i]){
      uppercases += s[i]
    }else{
      lowercases += s[i]
    } 
  }
  return uppercases + lowercases
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  word = ''
  newPhrase = ''  
  myReverseWord = function(word){    
    newReversedWord = ''    
    for (let i = word.length -1; i >= 0; i-- ){
      newReversedWord += word[i]
    }   
    return newReversedWord
  }

  for ( let i = 0; i < str.length; i++ ){
    if (str[i] !== ' '){
      word += str[i]
    }else{
      newPhrase += myReverseWord (word) + ' '
      word = ''
    }     
  }
  newPhrase += myReverseWord( word )
  return newPhrase
} 

function myTest2(word){
  myReverseWord = function(word){    
    newReversedWord = ''
    for ( i = word.length -1; i >= 0; i-- ){
      newReversedWord += word[i]      
    } 
    return newReversedWord
  }
  console.log ( myReverseWord( word ))
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  reverseNumber = function(number){
    numberAsString = number.toString()
    reversedNumberAsString = ''    
    for (let i = numberAsString.length -1; i >= 0; i-- ){
      reversedNumberAsString += numberAsString[i]
    }   
    return parseInt (reversedNumberAsString, 10)
  }
  if ( reverseNumber(numero) == numero) return 'Es capicua'
  return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  newString = ''
  for ( let i = 0; i < cadena.length; i++ ){
    if ( cadena[i] == 'a' || cadena[i] == 'b' || cadena[i] == 'c') continue
    newString += cadena[i]
  }
  return newString
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
      
  do{
    changes = 0
    for ( let i = 0; i < arr.length -1; i++ ){
      if (arr[i].length > arr[i+1].length ){
        auxiliarWord = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = auxiliarWord
        changes ++
      }
    }
  }while ( changes > 0)  
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  joinedArray = []  
  for ( let i = 0; i < arreglo1.length; i++ ){
    for ( let j = 0; j < arreglo2.length; j++ ){
      if ( arreglo1[i] === arreglo2[j] ) joinedArray.push( arreglo1[i])
    }
  }
  return joinedArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

