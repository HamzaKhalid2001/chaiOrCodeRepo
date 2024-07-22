/*
1. many times, while receiving data in backend, we don't know the type of data that is coming from front-end
2. "33abc" can be converted in JS, but actually it is not actually number
3. null ki type object hoti hai
4. "33" => 33
5. "33abc" => NaN:type iski number hi hai
6. true => 1; false => 0;
7. 
*/

let score = undefined

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)