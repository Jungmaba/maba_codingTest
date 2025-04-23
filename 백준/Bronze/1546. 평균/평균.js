const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = Number(input[0]);
const b = input[1].split(' ').map(Number);
const maxValue = Math.max.apply(null, b);
const newB = b.map((value) => (value / maxValue) * 100);
const reuslt = newB.reduce((a, b) => a + b) / a;
console.log(reuslt.toFixed(2));


// 메서드 라이브러리 사용하지 않고 코드 짜보기
// const fs = ['3', '80 40 80'];
// const a = Number(fs[0]);
// const b = fs[1].split(' ').map(Number);

// const max = (arr) => {
//   let tmp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (tmp > arr[i]) {
//       continue;
//     } else tmp = arr[i];
//   }
//   return tmp;
// };

// const maxValue = max(b);

// const newScore = (arr2, max = maxValue) => {
//   let score = [];
//   for (let i = 0; i < arr2.length; i++) {
//     score[i] = (arr2[i] / maxValue) * 100;
//   }
//   return score;
// };

// const newAverage = (arr3) => {
//   let avg = 0;
//   for (let i = 0; i < arr3.length; i++) {
//     avg += arr3[i];
//   }
//   return avg / arr3.length;
// };
// const newValue = newScore(b);
// const newAverageValue = newAverage(newValue);
// console.log(newAverageValue.toFixed(2));
