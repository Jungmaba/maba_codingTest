function solution(array) {
    let right = array.length-1;
    let left = 0;
    array.sort((a,b)=> a - b);
    while(left < right){
        right--;
        left++;
    }
    return array[left];
}