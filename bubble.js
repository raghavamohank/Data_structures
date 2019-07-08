bubblesort = (arr) => {
    let len = arr.length;
    for(let i= 0;i<=len-1;i++){
        for(let j=1;j<=len-1;j++){
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
}
    return arr;
    
}
let h =bubblesort([7,5,2,3,1]);
console.log(bubblesort([15,6,3,12,2]))
console.log(h)