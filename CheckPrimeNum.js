var x = 5;
var f = true;

for(var x=1; x<5/2+1; x++){
    if(x%2 == 0){
        f = false;
    }
}

document.write((f) ? "Prime" : "Not Prime");

