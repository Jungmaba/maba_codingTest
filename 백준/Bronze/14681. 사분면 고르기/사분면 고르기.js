const input = require('fs').readFileSync(0).toString().split('\n');

const x = Number(input[0].trim());
const y = Number(input[1].trim());

if (x > 0 && y > 0) {
    console.log(1);
} else if (x < 0 && y > 0) {
    console.log(2);
} else if (x < 0 && y < 0) {
    console.log(3);
} else {
    console.log(4);
}