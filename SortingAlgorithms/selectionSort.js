"use strict";

const swap = (array, i,j)=>{
    let temp = array[i];
    array[i]=array[j];
    array[j]=temp;
    return array;
}

function selectionSort(array){
    for(let i=0;i<array.length;i++){
        let indexOfSmallest = i;
        for(let j=i+1;j<array.length;j++){
            if(array[indexOfSmallest]>array[j]) indexOfSmallest=j;
        }
        swap(array,indexOfSmallest,i);
    }
    return array;
}

let arr= [3,0,4,26,7,4];
console.log(selectionSort(arr));

// Big O notation for selection sort is O(n^2)
// Worst case O(n^2)
// Best Case O(n^2)