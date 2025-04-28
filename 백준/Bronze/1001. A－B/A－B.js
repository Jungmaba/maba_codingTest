const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = [x ,y] = input[0].split(" ").map(Number);
console.log(x - y);
