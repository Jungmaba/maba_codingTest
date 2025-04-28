const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [x] = input[0].split(" ").map(Number);
if(x >= 90){
    console.log('A');
}else if(x >= 80 && x < 90){
    console.log('B');
}else if(x >= 70 && x < 80 ){
    console.log('C');
}else if(x >= 60 && x < 70){
    console.log('D');
}else console.log("F");
