var fs = require('fs');

var inputAry = fs.readFileSync('eulerProject13input.txt').toString().split("\r\n").map(parseFloat);

var sum = 0;

for (var i = 0; i < inputAry.length; i++) { 
    sum += inputAry[i];
}

console.log(sum);