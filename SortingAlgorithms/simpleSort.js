"use strict";

const swap = (array, i,j)=>{
    let temp = array[i];
    array[i]=array[j];
    array[j]=temp;
    return array;
}

function simpleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                swap(array,i,j);
            }
        }
    }
    return array;
}

let arr= [3,0,4,26,7,4];
console.log(simpleSort(arr));