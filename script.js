// (1) Array filter() 

const age1 = [32, 33, 16, 17, 18, 6, 40, 55];

function isVoter(vAge) {
  return vAge >= 18;
}
const voterList = age1.filter(isVoter);
console.log(voterList);

// (2) Array find()

const age2 = [32, 33, 16, 17, 18, 6, 40, 55];

function checkPerson(pAge) {
  return pAge > 33;
}
const person = age2.find(checkPerson);
console.log(person);

// (3)  //
const num = [32, 33, 16, 17, 18, 6, 40, 55];
function newFunction(n) {
  return n * 2;
}
const newNumber = num.map(newFunction);
console.log(newNumber);

// (4) Array reduce() 

const num1 = [32, 33, 16, 17, 18, 6, 40, 55];
function getTotal(first, next) {
  return first + next;
}
const total = num1.reduce(getTotal);
console.log(total);

// (5) Array sort() 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
 