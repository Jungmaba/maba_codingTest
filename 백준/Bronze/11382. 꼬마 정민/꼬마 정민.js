const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [x, y, z] = input[0].split(" ").map(Number);
console.log(x + y + z);