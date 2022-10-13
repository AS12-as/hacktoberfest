const arr = [12, 4, 5, 10, 9]
const num1 = 2;
const num2 = 3;
const allDivides = (arr, num) => arr.every(el => num % el === 0);
const smallestMultiple = (arr, num) => {
   let smallestN = Math.pow(10, (num - 1));
   while(!allDivides(arr, smallestN)){
      smallestN++;
   };
   return smallestN;
};
console.log(smallestMultiple(arr, num1));
console.log(smallestMultiple(arr, num2));