"use strict";

function mergeSort(array){
    
    if(array.length<=1) return array;
    let middle = array.length/2;
    let left = array.slice(0,middle);
    let right = array.slice(middle);
    mergeSort(left);
    mergeSort(right);
    merge(left,right,array);
    return array;
}

function merge(left,right,array){
    let i=0;
    let j=0;
    let k=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            array[k]=left[i];
            i++;
        }else{
            array[k]=right[j];
            j++;
        }
        k++;
    }
    while(i<left.length){
        array[k]=left[i];
        i++;
        k++;
    }
    while(j<right.length){
        array[k]=right[j];
        j++;
        k++;
    }
    return array;
}

let arr= [3,0,4,26,7,4];
console.log(mergeSort(arr));

// Worst case O(nlogn)
// Best case O(nlogn)