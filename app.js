let numeros = document.getElementById("numeros");
const input = document.querySelector("input");
const button = document.querySelector("button");
const resultadosActualizados = document.getElementById("resultados-actualizados");

// Create a function that will return an array of 10 random numbers from 1 to 10
function getRandomNumbers() {
  randomArray = [];
  for (let i = 0; i < 5; i++) {
      randomArray.push(Math.floor(Math.random() * 10));
  }
  numeros.innerHTML = randomArray;
  return randomArray;
}

// Create a function that will show one by one the numbers of the array with n seconds delay
// function showNumbers() {
//   let i = 0;
//   let interval = setInterval(function () {
//       if (i < randomArray.length) {
//           numeros.innerHTML = randomArray[i];
//           i++;
//       } else {
//           clearInterval(interval);
//       }
//   }, 5000);
// }

// Create a function to show the sum of the numbers
function sumNumbers() {
  let sum = 0;
  for (let i = 0; i < randomArray.length; i++) {
    sum += randomArray[i];
  }
  return sum;
}

button.addEventListener("click", () => {
  sumNumbers() === parseInt(input.value) ? resultadosActualizados.innerHTML = `${randomArray} = ${sumNumbers()} ✅` : resultadosActualizados.innerHTML = `Tu respuesta: ${input.value} ❌ ${randomArray} = ${sumNumbers()}`;
})

getRandomNumbers();
// showNumbers();

console.log(getRandomNumbers());
console.log(sumNumbers());
