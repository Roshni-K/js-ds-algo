function debounce(func, wait=3000){
    let indebounce;
    return function(...args){
        let context = this;
        if(indebounce){
            clearTimeout(indebounce);
        }
        indebounce = setTimeout(() => func.apply(context, args), wait)
    }
}

function throttle(func, wait=3000){
    let throttle = false;
    return function(...args){
        let context = this;
        if(!throttle){
            func.apply(context, args)
            throttle = true;
        }
        setTimeout(() => throttle = false, wait )
    }
}