/**
 * @param {string} s
 * @return {number}
 * Example 1:

    Input: s = "42"

    Output: 42

    Explanation:

    The underlined characters are what is read in and the caret is the current reader position.
    Step 1: "42" (no characters read because there is no leading whitespace)
            ^
    Step 2: "42" (no characters read because there is neither a '-' nor '+')
            ^
    Step 3: "42" ("42" is read in)
 */
var myAtoi = function(s) {
    // s = s.split('')
    console.log("s:", s);
    s = s.trim()
    let left = 0, result = '';
    if (s[left] !== '+' && s[left] !== '-' && isNaN(Number(s[left]))) return 0;
    while (left < s.length) {
        if (Number.isInteger(Number(result + s[left])) || !result) {
            console.log("---", s[left]);
            result += s[left]
        } else break;
        left++;
    }
    // console.log(result);
    // return result
    if ((Number(result) > Math.pow(2, 31) -1)) return Math.pow(2, 31) -1;
    if ((Number(result) < Math.pow(-2, 31))) return Math.pow(-2, 31);
    return Number(result) || 0;
};

// console.log(myAtoi('words and 987'));
// console.log(myAtoi('0-1'));
// console.log(myAtoi('1337c0d3'));
// console.log(myAtoi(" -042"));
console.log(myAtoi("3.14159"));

