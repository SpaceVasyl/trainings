const arrayOfObjects = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
  { name: "Eva", age: 28, city: "San Francisco" },
];
//перше завдання
// const nameAndAgeOfEachPerson = function (arrayOf) {
//   for (const arr of arrayOf){
//     console.log(`${arr.name} is ${arr.age} years old`);
//   }
// }
// nameAndAgeOfEachPerson(arrayOfObjects);
//друге завдання
const mediumAge = function (ageOfPersons) {
let ages = null;
for (const age of ageOfPersons){
  ages.push(age.age)
}
console.log(ages);
}
mediumAge(arrayOfObjects);