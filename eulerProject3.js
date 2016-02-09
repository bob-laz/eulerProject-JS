function isPrime(n) {
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

function largestPrimeFactor(n) {
    var largest = 1;
    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0 && isPrime(i)==true) {
                largest = i;
        }
    }
    return largest;
}

console.log(largestPrimeFactor(600851475143));