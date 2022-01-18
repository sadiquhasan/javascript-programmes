var x = [1,2,5,6,8,9,7,4,5];

//progamme to find duplicate Number in an array

x.sort((a,b)=>{
    return a-b;
})

for(var i=0; i<x.length; i++){
    if(x[i]==x[i+1]){
        console.log(x[i]);
    }
}
