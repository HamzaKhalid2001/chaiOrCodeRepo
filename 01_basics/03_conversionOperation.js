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

// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// ********************* Operations **************************

let value = 3;
let negValue = -value;
console.log(negValue)

// console.log("1" + 2) => 12 /* if string is first all the remaining will be treated as string*/
// console.log("1" + 2 + 2); => 122 /* if string is first all the remaining will be treated as string*/
// console.log(1 + "2"); => 12  /* if the string is in last, first the operation will be performed then it will get combined*/
// console.log(1 + 2 + "2"); => 32 /* if the string is in last, first the operation will be performed then it will get combined*/

