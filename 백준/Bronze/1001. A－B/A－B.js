const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); //입력 받기
const n = [x ,y] = input[0].split(" ").map(Number); //문자열로 받은 input 을 " " 통해 나누고 map() 함수를 통해 문자열 -> 숫자타입으로 바꿔주고 구조 분해로 각 나눠진 값 x, y에 집어넣기
console.log(x - y);
