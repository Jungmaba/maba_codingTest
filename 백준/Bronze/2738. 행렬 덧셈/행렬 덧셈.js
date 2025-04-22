const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const a = [];
const b = [];

for (let i = 1; i <= n; i++) {
  a.push(input[i].split(' ').map(Number));
}

for (let i = n + 1; i <= 2 * n; i++) {
  b.push(input[i].split(' ').map(Number));
}

const result = a.map((row, i) => row.map((value, j) => value + b[i][j]));
result.forEach((row) => console.log(row.join(' ')));


// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const a = input.slice(1, 1 + n).map((line) => line.split(' ').map(Number));
// const b = input.slice(1 + n, 1 + 2 * n).map((line) => line.split(' ').map(Number));
// const result = a.map((row, i) => row.map((value, j) => value + b[i][j]));
// result.forEach((row) => console.log(row.join(' ')));
