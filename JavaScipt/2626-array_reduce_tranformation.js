/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let answer=init;
    nums.forEach(curr => {
        answer=fn(answer,curr);
    });
    return answer;
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
console.log(reduce(nums,fn,init));

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
console.log(reduce(nums,fn,init));

nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
console.log(reduce(nums,fn,init));