let score = "33"

console.log(typeof score);
console.log(typeof(score));

let convert = Number(score)
console.log(typeof(convert));

// "33" => 33
// "33abc" => NaN(Not a Number)
// true => 1 , false => 0;
// null => 0

let logg = 1
let convertlogg = Boolean(logg)

console.log(convertlogg);
console.log(typeof(convertlogg));

// 1 => true , 0 => false;
// "" => false 
// "Ball" => true
 
let num = 18
let stringnum = String(num)

console.log(stringnum);
console.log(typeof(stringnum));