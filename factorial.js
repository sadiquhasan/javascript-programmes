//using normal factorial way

var numb= parseInt(prompt("enter the number"));
if(numb<0){
    console.log("-ve value dosent exist");
}
else if(numb===0){
    console.log("factorial of 0 is 1");
}

else{
    let fact=1;
    for(i=1;i<=numb;i++){
        fact*=i
    }
    console.log(fact);
}
