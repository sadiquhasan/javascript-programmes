// palindrome
function palindrome(str) {
    var a = string.split("").reverse().join("");
    if(string==a){
        console.log('its a palindrome');
    }
    else{
        console.log('its nnot a palindrome');
    } 
}

let string=prompt("enter string");
palindrome(string);