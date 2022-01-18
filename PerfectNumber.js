//Check Wheather the number is perfect or not

var x = 143;

for(var i=1; i<=x/2; i++){
    if(x%i == 0){
        var sum = sum + i;
    }
}

console.log(sum);