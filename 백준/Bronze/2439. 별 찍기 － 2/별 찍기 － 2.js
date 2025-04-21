const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const num = parseInt(input);

for (let i = 1; i <= num; i++) {
  let line = '';
  for (let j = 1; j <= num - i; j++) {
    line += ' ';
  }
  for (let k = 1; k <= i; k++) {
    line += '*';
  }
  console.log(line);
}