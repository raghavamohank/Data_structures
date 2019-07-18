function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right+left)/2)],
        i     = left;
        j     = right;
    
    while(i <= j){
        while(items[i]<pivot) {
            i++;
        }

        while(items[j]> pivot) {
            j--;
        }

        if(i<=j) {
            swap(items,i,j);
            i++;
            j--;
        }
    }

    return i;
}

function quicksort(items,left,right) {
    let index;
    if(items.length>1) {
        index = partition(items,left,right); 
        if(left < index-1) {
            quicksort(items,left, index-1);
        }
        if(index < right) {
            quicksort(items,index,right);
        }
    }
    return items;
}

var items = [5,3,7,2,4,9,1];
var sortedArray = quicksort(items,0, items.length-1);
console.log(sortedArray);

function trigger()

{

document.getElementById("hover").addEventListener("mouseover", popup);

function popup()

{

alert("Welcome to my WebPage!!!");

}   

}