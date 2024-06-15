"use strict";

const swap = (array, i,j)=>{
    let temp = array[i];
    array[i]=array[j];
    array[j]=temp;
    return array;
}

function bubbleSort(array){
    
    for(let k=0;k<array.length-1;k++){
        for(let i=0;i<array.length-k;i++){
            if(array[i]>array[i+1])swap(array,i,i+1);
        }
    }
        
    return array;
}

let arr= [3,0,4,26,7,4];
console.log(bubbleSort(arr));

// Worst case O(n^2)
// Best case O(n)