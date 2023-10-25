let n = 44
if (n % 2 == 0) {
    console.log(n + " " + "is an even number.")
} else if (n % 2 !== 0) {
    console.log(n + " " + "is an odd number.")
} else {
    console.log("Wrong integer!")
};

let tempCelcius = 60
let tempFahrenheit = (((9/5) * tempCelcius) + 32)
console.log(tempFahrenheit)

let i = 3
let sumNumber = ((i * (i + 1)) / 2)
console.log(sumNumber);

let y = 6
let factorial = 1;
for (i = 1; i <= y; i++) {
    factorial *= i;
}
console.log(factorial);

let z = 12
let isPrime = true
for (i = 2; i < z; i++) {
    if (z % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);

const fiboNumber = 16
let a = 0
let b = 1
let sequence = 0;
for (let i = 1; i <= fiboNumber; i++) {
    console.log(a);
    sequence = a + b;
    a = b;
    b = sequence;
}