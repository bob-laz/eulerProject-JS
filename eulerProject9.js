function isPythagoreanTrip(a, b, c) {
    if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) 
        return true;
    return false;
}

function generateTrip() {
    var counter = 0;
    for (i = 1; i<1000 ; i++) {
        for (j = 1; j < 1000 ; j++) {
            for (k = 1; k < 1000 ; k++) {
                if(i + j + k === 1000) {
                    if (isPythagoreanTrip(i, j, k)) {
                        console.log("Found! i: " + i + " j: " + j + " k: " + k);   
                        return i*j*k;
                    }
                }
            }
        }
    }
    return 0;
}

console.log(generateTrip());