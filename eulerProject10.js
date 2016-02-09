function isPrime(n) {
    if (n <= 1)
        return false;
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

function sumOfPrimes(n) {
    var sum = 0;
    for (var i = 2; i < n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfPrimes(2000000));