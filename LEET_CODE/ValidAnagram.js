// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let mapS = new Map(), mapT = new Map();
    for (let c of s) {
        if (mapS.has(c)) {
            mapS.set(c, mapS.get(c) + 1);
        } else {
            mapS.set(c, 1);
        }
    }
    for (let c of t) {
        if (mapT.has(c)) {
            mapT.set(c, mapT.get(c) + 1);
        } else {
            mapT.set(c, 1);
        }
    }
    for (let [key, value] of mapS) {
        if (mapT.get(key) !== value) {
            return false;
        }
    }
    return true;
};


console.log(isAnagram("aaaa", "aabb")); // true
