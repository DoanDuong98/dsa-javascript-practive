// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    for (; left < right; left++, right--) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
