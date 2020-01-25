function fibonnaci(n){
    if(n==0) return 0;
    if(n<=2){
        return 1;
    }else{
    return fibonnaci(n-1) +fibonnaci(n-2);
    }
}
console.log(fibonnaci(8))


function memofibonnaci(n, cache={}){
if(n==0){return 0}
if(n<=2){
   return 1;
}else {
    if(cache[n]){
        return cache[n]
    }else {
        let result = memofibonnaci(n-1, cache) + memofibonnaci(n-2, cache);
        cache[n] = result;
        return result;
    }
}
}
function factorial(n){
    if(n<=1){return 1}
return n*factorial(n-1)
}

function factorialCache(n, cache={}){
    if(n<=1){return 1}
    if(cache[n]){return cache[n]}
    else{
        let result =  n*factorial(n-1);
        cache[n] = result;
        return cache[n]
    }
}