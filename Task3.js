// Abd abuelhija's solution

// Q1
// [10, 30, 20]

// Q2
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
const { a, b } = obj.numbers;

// Q3
var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// Q4
const { [propName]: name, age } = person;

// Q5
const { address: { street, city, state } } = person[propName];

// Q6
// const { 
//   firstName,
//   lastName,
//   [propName]: { street, city, state = 'CA' } = {}
// } = person;

// Q7

// const {
//   name,
//   age,
//   address: {
//     street,
//     city,
//     state,
//     coordinates: { latitude, longitude }
//   },
//   getFullName
// } = person;

// Q8
const [
  { firstName: first = 'Unknown', lastName: last, age: years = 'Unknown' },
  { firstName: fn = 'Unknown', lastName: ln = 'Unknown', age: yrs = 'Unknown' }
] = people;

// Q9
// const { [propName]: { name, age, getAddress } } = obj;
// const { street, city, state } = getAddress();

