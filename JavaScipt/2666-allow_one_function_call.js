/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let allow = true;
    return function(...args){
        if(allow===true){
            let answer = 0;
            answer=fn(...args);
            allow=false;
            return answer;
        }
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
 
 console.log(onceFn(1,2,3)); // 6
 console.log(onceFn(2,3,6)); // returns undefined without calling fn
 
