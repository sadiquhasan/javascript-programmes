var x = 50;
var f = true;

for(var i=3; i<=50; i++) {
   f = true;
   for(var j=2; j<i/2+1; j++) {
       if(i%j == 0) {
           f = false;
       }
   }
   (f) ? document.write(i+" ") : null;
}