function isPrime(n) {
    if (n <= 1)
        return false;
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

function nthPrime(n) {
    var counter = 0;
    var index = 1;
    
    while (counter != n) {
        if (isPrime(index))
            counter++;
        if(counter != n)
            index += 2;
    }
    return index;
}

console.log(nthPrime(10001));