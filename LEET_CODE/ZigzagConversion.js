// https://leetcode.com/problems/zigzag-conversion/description/
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const g = new Array(numRows).fill(0).map(() => []);
    let i = 0;
    let k = -1;
    for (const c of s) {
        g[i].push(c);
        if (i === numRows - 1 || i === 0) {
            k = -k;
        }
        i += k;
    }
    console.log(g)
    return g.flat().join('');
};

console.log(convert("PAYPALISHIRING", 3));
