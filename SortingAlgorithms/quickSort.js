"use strict";

const swap = (array, i,j)=>{
    let temp = array[i];
    array[i]=array[j];
    array[j]=temp;
    return array;
}

function quickSort(array,start=0,end=array.length-1){
    if(start>=end) return;
    let index = partition(array,start,end);
    quickSort(array,start,index-1);
    quickSort(array,index+1,end);
    return array;
}

function partition(array,start,end){
    let pivot = array[end];
    let i=start;
    for(let j=start;j<end;j++){
        if(array[j]<pivot){
            swap(array,i,j);
            i++;
        }
    }
    swap(array,i,end);
    return i;
}

let arr= [3,0,4,26,7,4];
console.log(quickSort(arr));

// Big O notation for quick sort is O(n log n)
// Worst case O(n^2)
// Best Case O(n log n)