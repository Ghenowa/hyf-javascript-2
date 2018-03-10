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


