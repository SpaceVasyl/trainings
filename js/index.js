const arrayOfObjects = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
  { name: "Eva", age: 28, city: "San Francisco" },
];

//перше завдання Вивести в консоль ім'я і вік кожної особи з масиву arrayOfObjects.

const nameAndAgeOfEachPerson = function (arrayOf) {
  for (const arr of arrayOf){
    console.log(`${arr.name} is ${arr.age} years old`);
  }
}
nameAndAgeOfEachPerson(arrayOfObjects);

//друге завдання Знайти середній вік всіх осіб в масиві та вивести його в консоль.

const mediumAge = function (ageOfPersons) {
let ageOfUser = null;
let numberOfUsers = null;
for (const person of ageOfPersons){
  ageOfUser = ageOfUser + person.age;
  numberOfUsers++;
  
}
 console.log(ageOfUser/numberOfUsers);
}
mediumAge(arrayOfObjects);

//Третє завдання Вивести в консоль імена всіх осіб, які мають вік більше 30 років.

const ageOfSomebody = function(somebody){
for(const some of somebody){
  if(some.age >= 30){
    console.log(some);
  }
}
}
ageOfSomebody(arrayOfObjects)

//четверте завдання Створити новий масив, який буде містити об'єкти лише тих осіб, які мають місто "New York".

const largeCity = function (cityzens){
  let newArrayOfCityzens = [];
for(const cityzen of cityzens){
  if (cityzen.city === "New York"){
    newArrayOfCityzens.push(cityzen);
  }
}
return newArrayOfCityzens
}
largeCity(arrayOfObjects);

//п'яте завдання Відсортувати масив об'єктів за віком в порядку спадання і вивести в консоль відсортований масив.

const sortByAge = function(arrayForSort){
  arrayForSort.sort(function (a, b) {
    return b.age - a.age;
  })
  console.log(arrayForSort);
}
sortByAge(arrayOfObjects);