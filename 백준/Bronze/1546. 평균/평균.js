const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = Number(input[0]);
const b = input[1].split(' ').map(Number);
const maxValue = Math.max.apply(null, b);
const newB = b.map((value) => (value / maxValue) * 100);
const reuslt = newB.reduce((a, b) => a + b) / a;
console.log(reuslt.toFixed(2));
