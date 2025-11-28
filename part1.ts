//Defining variables with types
let name: string = "Okyanus";
let age: number = 27;
let isCodingFun: boolean = true;
let profession: string = "Software Engineer";

//Birth year calculation
function calculateBirthYear(ageValue: number): number {
    let currentYear: number = 2025;
    return currentYear - ageValue;
}

let birthYear: number = calculateBirthYear(age);

console.log("-----------------------------------------");
console.log(`Hello ${name}`);
console.log(`You are ${age} years old.`);
console.log(`You were born in ${birthYear}.`);
console.log(`My profession is ${profession}.`);
console.log(`Is coding fun? ${isCodingFun}`);
console.log("-----------------------------------------");