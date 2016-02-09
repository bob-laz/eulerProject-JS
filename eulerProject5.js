function divTest()
    {
        var divisibility = false;
        var i = 10;
        while (!divisibility) {
            for (j = 1; j <= 20; j++) {
                if (i % j == 0) {
                    divisibility = true;
                }
                else {
                    divisibility = false;
                    break;
                }
        }
        if (!divisibility)
            i++;
        else
            break;
        }
        return i;
    }
    
    console.log(divTest());