var now = require('performance-now');

function nthTriNum(n) {
    var triNum = 0;
    for (var i = 1; i <= n; i++) { 
        triNum += i;
    }
    return triNum;
};

function numDivisors(n) {
    var num = 0;
    if(n % 2 == 0) {
        for (var i = 1; i * i <= n; i++) {
            if (n % i == 0) {
                num += 2;
            }
        }
    }
    else {
        for (var i = 1; i * i <= n; i+=2) {
            if (n % i == 0)
                num += 2;   
        }
    }
    return num;
};

function triNum500Divisors() {
    for (var i = 1; i < 15000; i++) {
        var triNum = nthTriNum(i);
        console.log(i + "th Triangle Number: " + triNum);
        var num = numDivisors(triNum);
        console.log(num + " divisors");
        if (num > 500)
            return triNum; 
    }
    return -1;
};

var start = now();

console.log(triNum500Divisors());

var end = now();

console.log("Run time: " + (end-start));