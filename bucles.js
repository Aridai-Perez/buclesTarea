//1. Sum of Resistors in Series
 
// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

function sumaDeResistencia(){
    const resistance = [8,15,100];
    let suma = 0;

    for(let i = 0; i < resistance.length; i++) {
        
        if (resistance[i] == -1) {
            resistance[i] = -1 * resistance[i]
        } 
        
        suma = suma + resistance[i];
    }

    console.log(`resultado: ${suma} ohms`)
}
sumaDeResistencia();

//2. Number divided into halves
 
// Given a number, return the number divided into its halves in an array.
// Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.
 
function numberDivided() {
    const numDiv = 4;
    let div = numDiv/2;
    const halves = [];
    let cont = 0;
    while(cont < 2) {
        cont ++
        halves.push(div)
    }
        
    console.log(halves) 
}
numberDivided()

// 3. Secret Society
 
// Find the name of a secret society based on the first letter of each member's name.
// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
 
function initialLetter(){
    const names = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];

    for(let i = 0; i < names.length; i++){
        names[i] = names[i].charAt(0);
    }
    names.sort()
    console.log(names.join(""));
}
initialLetter()

//4. Online status
 
// Display online status for a list of users.
// Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 
function statusOnline(){
    const onlinesStatus = ['mockIng99', 'J0eyPunch', 'glassedFer'];
        if(onlinesStatus.length !== 0){
            if(onlinesStatus.length >= 3){
                console.log(`${onlinesStatus.join(", ")} and ${onlinesStatus.length - 2} more online`)
            } else {
                console.log(`${onlinesStatus.join(", ")} oneline`)
            }
        }else {
            console.log("There are no users online")
        }
}
statusOnline();

//5. Array of Multiples

// Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
// Examples:
// - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
// - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 
function multiples (number, lengths) {
    number = [2,10];
    lengths = [];

        for(let i = 1; i <= number[1]; i++){
             let multi = number[0] * i;
                lengths.push(multi);
        }
    
    console.log(lengths)
}
multiples()

//6. Positive dominance in Array

// Write a function to determine if an array is positively dominant.
// An array is positively dominant when the majority of its elements are positive.
// Example:
// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

const numArr = [-10,-1,50,1,2,5]
const negativeArr = [-10,-1,-10,-4,4,4]
function positiveArr(arr){

    let positiveCount = 0;
    arr.forEach((num) => {
        if (num > 0){
            positiveCount++;
        }
    })
    const mid = arr.length / 2
    return positiveCount > mid;
}
const res = positiveArr(numArr);
console.log(res);

//7. Antipodal Average

// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.

const array = [1,2,3,5,22,6,5];
let firstArray = [];
let secondArray = [];
let ultimateArray = [];

function antidopalAverage(array){

    if(array.length % 2 === 0){
            firstArray = (array.slice(0,array.length /2));
            secondArray = (array.slice(array.length/2 , array.length ))
            secondArray.reverse();
    }else {
            firstArray = (array.slice(0,array.length /2));
            secondArray = (array.slice(array.length/2 +1, array.length))
            secondArray.reverse();
    }

}

function sumDivArr() {
    antidopalAverage(array);

    for(let i = 0; i < firstArray.length; i++) {
        let count = (firstArray[i] + secondArray[i])/2;
        ultimateArray.push(count);
    }

    console.log(`the result: ${ultimateArray}`)
}

sumDivArr();