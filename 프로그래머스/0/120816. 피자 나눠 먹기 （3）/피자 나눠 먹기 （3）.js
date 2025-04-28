function solution(slice, n) {
    var answer = 0;
    let count = 1;
    
    while(slice*count < n){
        count++;
    }
    answer = count;
    return answer;
}