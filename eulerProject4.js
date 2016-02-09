function reverse(s) {
    var reversed = "";
    for (i = s.length; i > 0; i--) { 
        reversed += s.charAt(i - 1);
    }
    return reversed;
}

function isPalindrome(n) {
    var s1 = n.toString();
    var s2 = reverse(s1);
    if (s1 == s2)
        return true;
    return false;
}

function palindromeProduct() {
    var largest = 0;
    var product = 0;
    for (var i = 100; i <= 999; i++) {
        for (var j = 100; j <= 999; j++) {
            product = i * j;
            if (product > largest && isPalindrome(i * j)) {
                largest = i * j;
        }
        }
    }
    return largest;
}

console.log(palindromeProduct());