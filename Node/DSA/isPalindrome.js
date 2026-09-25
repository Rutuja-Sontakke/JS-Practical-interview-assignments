const str = ("HELLO");

function isPalindrome(str) {
    let left = 0; //pointer
    let right = str.length - 1; //pointer

    while( left < right) {

        if(str[left] !== str[right]) {
            return false;
        }
        left ++;
        right--;
    }

    return true;
}

console.log(isPalindrome(str));
// console.log(JSON.stringify(isPalindrome(str)));