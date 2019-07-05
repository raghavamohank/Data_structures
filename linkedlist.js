swap = (arr,firstIndex,secondIndex) => {
    let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
}

function bsort(arr) {
    let i,j;
    let len = arr.length;
    for(i=0;i<=len;i++) {
        for(j=1;j<=len-1;j++)
    if(arr[j]>arr[j+1]){
        swap(arr,j,j+1);
    }
}
}

console.log(bsort([6,2,10,14,5]));