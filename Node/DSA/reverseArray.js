const arr = [5,3,2,1,3,0];

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp;

        left ++;
        right --;
    }

    return arr;
}

console.log(reverseArray(arr));