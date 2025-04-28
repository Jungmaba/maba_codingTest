const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [x, y] = input[0].split(" ").map(Number);
if(x > y){
    console.log(">");
}else if(x < y){
    console.log("<");
}else{
    console.log("==")
}
