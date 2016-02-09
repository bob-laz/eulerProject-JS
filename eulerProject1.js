function sumOfMultiples(n) {
    var sum = 0;
    var i = 0;
    while (i < n) {
        if (i % 3 == 0)
            sum += i;
        else if (i % 5 == 0)
            sum += i;
        i++;
    }
    return sum;
}

console.log(sumOfMultiples(1000));