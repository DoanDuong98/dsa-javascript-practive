// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) < map.get(s[i + 1])) {
            result += map.get(s[i + 1]) - map.get(s[i]);
            i++;
        } else {
            result += map.get(s[i]);
        }
    }
    return result;
};

console.log(romanToInt("MCMXCIV")); // 3
