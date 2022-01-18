const user = parseInt(prompt("enter the number"));
var s = ""

if(user>0){
    s = "its a positive number";
}
else if(user<0){
    s = "its a negetive number"
}
else{
    s = "its a zero";
}

document.write(s)