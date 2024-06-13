/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    for(let i=0; i < arr.length;i++){
        if(fn(arr[i],i)){
            newArr.push(arr[i]);
        };
    }
    return newArr;
};

arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
console.log(filter(arr,fn));