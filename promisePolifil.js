    class PromisePolyfill{
        constructor(executor){
            this.state = 'PENDING',
            this.onCatch = undefined,
            this.thenCallbackArray = [],
            // this.then = undefined,
            this.onFinally = undefined,
            this.value = undefined
            if(typeof executor !== 'function' && executor){
                throw new Error('Pass callback function')
            }
            try {
                executor(this.resolve.bind(this), this.reject.bind(this));
            }catch (err) {
                this.reject(error);
            }
        }
        resolve = (value) => {
            this.value = value;
            this.state = 'FULFILLED';
            this.thenCallbackArray.forEach(ele => {
                ele(this.value);
            });
            if (typeof this.onFinally === "function") {
                this.onFinally(this.value);
            }
        }
        reject = (reason) => {
            this.value = reason;
            this.status = "REJECTED";
    
            if (typeof this.onCatch === "function") {
                this.onCatch(this.value);
            }
    
            if (typeof this.onFinally === "function") {
                this.onFinally(this.value);
            }
        }
        then = (callback) => {
                this.thenCallbackArray.push(callback);
                return this;
        }
        catch = (callback) => {
            this.onCatch = callback;
            return this;
        }
        finally = (callback) => {
            this.onFinally = callback;
            return this;
        }
    }