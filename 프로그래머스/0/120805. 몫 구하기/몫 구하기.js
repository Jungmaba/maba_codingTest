function solution(num1, num2) {
    let count = 0;
    while(num1 >= num2){
        num1 -= num2;
        count++;
    }
    return count;
}