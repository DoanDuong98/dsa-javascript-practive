/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x == 0) return true;
    if (x < 0 || x%10 === 0) return false;
    let s = x.toString();
    let left = 0, right = s.length - 1, check = true;
    while(left < right) {
        if (s[left] !== s[right]) {
            check = false;
            break;
        }
        left++;
        right--;
    }
    return check
};

console.log(isPalindrome(121))

