var x = 7598601;
var count = 0;

while(x!=0){
    var digit = x%10;
    count++;
    x = Math.floor(x/10);
}

document.write(count);