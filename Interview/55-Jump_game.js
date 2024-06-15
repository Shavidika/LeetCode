/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length==1) return true;
    
    let goal = nums.length-1;
    let index = goal-1; 
    while(true){
        if(goal<=index+nums[index]){
            if(index==0) return true;
            goal= index;
            index--;
        }else{
            index--;
            if(index<0)return false;
        }
    }
};

nums = [0]
console.log(canJump(nums));