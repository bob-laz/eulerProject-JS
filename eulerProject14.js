var now = require('performance-now');
var length = 0;

function collatzSequence(n) {
    length++;
    if (n == 1)
        return;
    if (n % 2 == 0) {
        collatzSequence(n / 2);
    }
    else { 
        collatzSequence(3*n + 1);
    }
};

function longestSequence() {
    var longest = [0, 0];
    for (var i = 1; i < 1000000; i++) {
        length = 0;
        collatzSequence(i);
        if (length > longest[0]) {
            longest[0] = length;
            longest[1] = i;
            console.log(longest.toString());
        }
    }
    return longest;
};

var start = now();

console.log("Longest sequence: " + longestSequence());

var end = now();

console.log("Run time: " + (end - start) + "ms");