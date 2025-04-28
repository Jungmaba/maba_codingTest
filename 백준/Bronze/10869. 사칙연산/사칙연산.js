const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [x ,y] = input[0].split(" ").map(Number);
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(Math.floor(x/y));
console.log(x%y);