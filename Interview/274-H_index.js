/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>b-a);
    let i=0;
    for(;i<citations.length;i++){
        if(citations[i]<i+1) return i;
    }
    return i;
    
};

const citations = [1];
console.log(hIndex(citations));