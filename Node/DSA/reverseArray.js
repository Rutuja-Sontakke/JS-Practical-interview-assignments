const arr = [5,4,3,2,1,7,5,8,4,10,-100];

function reverseArray(arr) {

    let left = 0 ; //left start always with 0
    let right = arr.length - 1; //right always start with arr.length - 1

    while (left < right) {
        let temp = arr[left]; //for swapping
        arr[left] = arr[right];
        arr[right]= temp;

        left ++;
        right --;

    }
    return arr;

}

console.log(reverseArray(arr));
console.log(JSON.stringify(reverseArray(arr)))