function solution(array) {
    const newarray = array.sort();
    let count = 1;
    let countArray = [];
    let valueArray = [];


    for (let i = 1; i <= newarray.length; i++) {
        if (newarray[i] === newarray[i - 1]) {
        count++;
        } else {
        countArray.push(count);
        valueArray.push(newarray[i - 1]);
        count = 1;
        }
    }

    const maxCount = Math.max(...countArray);
    const modeCandidates = [];

    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] === maxCount) {
        modeCandidates.push(valueArray[i]);
        }
    }
  return modeCandidates.length > 1 ? -1 : modeCandidates[0];
}