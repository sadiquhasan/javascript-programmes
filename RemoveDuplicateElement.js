var x = [5,6,9,8,6]

x.sort((a,b)=>{
    return a-b;
})

for(var i=0; i<x.length; i++){
    if(x[i]==x[i+1]){
        splice(i,1);
    }
}