function fibSum(n) {
    var fib1 = 1;
    var fib2 = 2;
    var sum = 0;

    while ((fib2 || fib1) < n) {
        //console.log(fib1);
        //console.log(fib2);
        if (fib2 % 2 == 0)
            sum += fib2;
        temp = fib2;
        fib2 += fib1;
        fib1 = temp;
    }
    return sum;
}

console.log(fibSum(4000000));