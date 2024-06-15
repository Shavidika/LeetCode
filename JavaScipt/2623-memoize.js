/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    function sum (a,b){
        return a+b;
    }
    function fib(n){
        if(n<=1) return 1;
        else return fib(n - 1) + fib(n - 2);
    }
    function factorial(n){
        if(n<=1) return 1;
        else return factorial((n-1)*n);
    }
    return function(...args) {
        
    }
}


let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
 callCount += 1;
 return a + b;
  })
 memoizedFn(2, 3) // 5
 memoizedFn(2, 3) // 5
 console.log(callCount) // 1 
 