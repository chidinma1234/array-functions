//? Question 1: Difference between mutating and non mutating array methods.

//? Mutating array methods: are used to make changes to the original array.This array methods includes;
//? 1. array.shift()
//? 2. array.unshift()
//? 3. array.push()
//? 4. array.pop()
//? 5. array.splice()

//? Non mutating array methods:are used to create new arrays. This array methods includes;
//? 1. array.concat()
//? 2. array.join()
//? 3. array.slice()
//? 4. array.map()
//? 5. array.flat()

//? Question 2
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push('Kotlin');
// console.log(languages);
languages.splice(3, 0, 'Java');
// console.log(languages);
languages.shift();
// console.log(languages);
languages.unshift('Scala', 'Swift');
// console.log(languages);
languages.splice(5, 1, 'Go', 'Rust');
// console.log(languages);

// Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
  fruit[2] = 'orange';
  return fruit;
}

console.log(changeFruit(fruit));
//?. This will return ['apple', 'mango', 'orange]

//?. Question 4
const maxiValue = function (arr) {
  let maxVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
};
console.log(maxiValue([4, 5, 10, 2]));

//? Question 5

// const valTimesIndex = (arr) => arr.map((val, index) => val * index);
const valTimesIndex = function (arr) {
  return arr.map((val, index) => val * index);
};

console.log(valTimesIndex([1, 2, 3]));
