const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const names = persons.map(item => [item.firstname,item.lastname].join(" "));

// function getFullName(item) {
//   return [item.firstname,item.lastname].join(" ");
// }

// console.log(names);

const ages = [10, 18, 25];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25]