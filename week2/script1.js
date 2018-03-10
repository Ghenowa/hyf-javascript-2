//step1

/*let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

*/


/*
var numbers=[1,2,3,4];
var newNumbers=[];
var newNumbers = numbers.map(x=> x%newFunction() == 0);
console.log(newNumbers);

function newFunction() {
    return 2;
}
*/

var numbers=[1,2,3,4];
var newNumbers=[];
newNumbers=numbers.filter(x=> x%2 !==0).map(x=> x*2);
console.log(newNumbers);

//step2

/*let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

*/

let tasks=mondy.concat(tuesday);




