// /1. User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
// Store the information and then showcase it in the console. 
// Take note that the output for the films should add a small message like: 
// 'The film {film} is one of my favorites'.
// /

const colectionMovies = [];
let peliUsuario;
function agregarPeli(arr){
    return arr.push(peliUsuario)
}

function message(arr,username,age){
    alert(`Podrias crees que ${arr[0]} es una de las pelis favoritas de ${username} a sus ${age} anios \nRevisa la consola y veras su lista completa.`)
}

function entradaUsuario(arr) {
    
    let count = 1;
    alert("Bienvenido!!")
    let username = prompt("Podrias proporcionarme tu nombre?")
    let age = prompt("Ahora tu edad por favor")
    alert("Ahora podrias decirme al menos 3 peliculas favoritas?")

    while(count<=3){
        peliUsuario = prompt("pelicula " + count)
        agregarPeli(arr);
        count++
        
    }
    alert("Gracias!!")
    console.log(arr.join(", "))
    message(arr,username,age);
}

entradaUsuario(colectionMovies);

// /2. Highest number
// Write a program that asks for 10 numbers. 
// Using logical operators and any other javascript functions/structures you've seen before, 
// determine and output the highest of those numbers.
// /

// /3. Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm 
// (message) is executed alongside a text to show once those seconds have passed in real time.
// Result example: "Time for bed after 10 seconds"./

// /4. Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
// Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters./

// /5. Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion./

// /6. Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
// Use any type of algorithm you want like callbacks, recursion, etc...
// let multiDimension = [1, [2, 3, [4, 5, [6]]]];
// */

let saludo = prompt("hola como estas");

alert(saludo);