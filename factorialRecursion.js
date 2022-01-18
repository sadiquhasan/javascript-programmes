//recurssion way factorial

function factorial(num) {
  if(num>1){
      return num*factorial(num-1)
  }  return num ;
}

var num=4;
console.log(factorial(num));