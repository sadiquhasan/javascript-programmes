var x = 645;

//convert decimal to binary programme
function decimalToBinary(x) {
    var binary = [];
    var remainder;
    var i = 0;
    while (x > 0) {
        remainder = x % 2;
        binary[i] = remainder;
        x = Math.floor(x / 2);
        i++;
    }
    return binary;
}

decimalToBinary(x);

