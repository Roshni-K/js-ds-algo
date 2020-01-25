function sum(...args){
    return function (...args2){
    let allargs = args.concat(args2)
    if(args2.length){
    return sum(...args, ...args2);
    } else {
    return allargs.reduce((acc, currentval)=>{ return (acc + currentval)},0)
    }
    }
    }
    sum(1)(2)(3)(4)() 

    

function curryFunction(func,...args){
        if(func.length > args.length){
        return function(...args2){
        return curryFunction(func, ...args, ...args2);
        }
        }else {
        return func(...args)
        }
        };
        function sum(a,b,c,d){
            return a + b + c + d
            }
        var curry = curryFunction(sum);
        curry(1)(2)(3)(4);