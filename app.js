let randomArray = [];
let numeros = document.getElementById("numeros");

// Create a function that will return an array of 10 random numbers from 1 to 10
function getRandomNumbers() {
  randomArray = [];
  for (let i = 0; i < 10; i++) {
      randomArray.push(Math.floor(Math.random() * 10));
  }
  return randomArray;
}

// Create a function that will show one by one the numbers of the array with two seconds delay
function showNumbers() {
  let i = 0;
  let interval = setInterval(function () {
      if (i < randomArray.length) {
          numeros.innerHTML = randomArray[i];
          i++;
      } else {
          clearInterval(interval);
      }
  }, 3000);
}

// Create a function to show the sum of the numbers
function sumNumbers() {
  let sum = 0;
  for (let i = 0; i < randomArray.length; i++) {
    sum += randomArray[i];
  }
  return sum;
}

getRandomNumbers();
showNumbers();
sumNumbers();

console.log(getRandomNumbers());
console.log(sumNumbers());
