function sumOfSquares(n) {
    var sum = 0;
    for (i = 1; i <= n; i++) { 
        sum += Math.pow(i, 2);
    }
    return sum;
}

function squareOfSums(n) {
    var sum = 0;
    for (i = 1; i <= n; i++) { 
        sum += i;
    }
    return Math.pow(sum, 2);
}

console.log(squareOfSums(100) - sumOfSquares(100));