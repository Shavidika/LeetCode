/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length==1) return 0;
    let count=0;
    let goal=nums.length-1;
    let index;
    while(true){
        index= goal-1;
        for(let i=goal-1;i>=0;i--){
            if(nums[i]>=goal-i && index>=i){
                
                console.log("index",index);
                console.log("goal",goal);
                console.log("i",i);
                index=i;

            } 
        }
        count++;
        if(index<=0) return count;
        goal=index;
    }
};

const nums = [3,2,1]
// jump(nums);
console.log(jump(nums));
