function debounce(fn, wait = 5000,) {
    var indebounce;
    return (...args) => {
        let context = this;
       if(indebounce){
           clearTimeout(indebounce);
       }
       indebounce = setTimeout(() => fn.apply(this, args), wait);
    }
    // debounced.clear = function() {
    //     clearTimeout(indebounce);
        
    // }
    
}


function log() {
    console.log('hello');
}

const debouncedLog = debounce(log, 500);
debouncedLog();
debouncedLog();

class App {
    constructor() {
        this.a = 'hello from class';
        this.debHello = debounce(this._hello, 500);
    }
    
    _hello(a, b, c) {
        console.log(this.a);
    }
}

const app = new App();
// app._hello();
app.debHello(1,2,3);
app.debHello();
app.debHello();



function memoize(cb) {
    let cache = new Map();
    return function(...args){
        let args = args;
        if(cache.get(args.toString())){
            return cache.get(args.toString());
        }else {
            let output = cb(...args);
            cache.set(args.toString(), output);
            return output;
        }
        
    }
}

function add(a, b) {
    console.log('adding');
    return a + b;
}

const memoizedFn = memoize(add);
console.log(memoizedFn(10, 20));
console.log(memoizedFn(10, 20));
console.log(memoizedFn(20, 10))


class App extends Component {
    
}