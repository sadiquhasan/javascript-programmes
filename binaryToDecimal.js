var n = 1010001;

// binary to decimal programme
function binaryToDecimal(n) {
    var decimal = 0;
    var remainder;
    var i = 0;
    while (n > 0) {
        remainder = n % 10;
        decimal += remainder * Math.pow(2, i);
        i++;
        n = Math.floor(n / 10);
    }
    return decimal;
}

binaryToDecimal(n); 