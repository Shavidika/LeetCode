/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    current =init;
    return {
        increment : ()=>{
            current += 1;
            return current;
        },
        reset : () => {current = init; return init;},
        decrement : ()=>{
            current -=1;
            return current;
        }
    }
};

const counter = createCounter(0)
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset());
console.log(counter.reset());