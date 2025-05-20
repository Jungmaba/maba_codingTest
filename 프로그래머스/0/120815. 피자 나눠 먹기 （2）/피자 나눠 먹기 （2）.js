function solution(n) {
  let i = 1;
  let answer = 0;

  while (i <= n) {
    if (n % i === 0) { // n의 약수인지 확인
      if ((i * 6) % n === 0) {
        answer = i;
        break;
      }
    }
    i++;
  }
  return answer;
}