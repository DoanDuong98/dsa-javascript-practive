// https://leetcode.com/problems/intersection-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];
    for (let num of set1){
        if (set2.has(num)){
            result.push(num);
        }
    }
    return result;
};


console.log(intersection([1,2,2,1], [2,2])); // [2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // [9,4]
console.log(intersection([1,2,3,4,5], [6,7,8,9,10])); // []
console.log(intersection([1,2,3,4,5], [1,2,3,4,5])); // [1,2,3,4,5]
console.log(intersection([1,2,3,4,5], [5,4,3,2,1])); // [1,2,3,4,5]
console.log(intersection([1,2,3,4,5], [1,1,1,1,1])); // [1]
