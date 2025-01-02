// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const Map1 = new Map();
    const Map2 = new Map();
    const result = [];
    for (let num of nums1){
        if (Map1.has(num)){
            Map1.set(num, Map1.get(num) + 1);
        } else {
            Map1.set(num, 1);
        }
    }
    for (let num of nums2){
        if (Map2.has(num)){
            Map2.set(num, Map2.get(num) + 1);
        } else {
            Map2.set(num, 1);
        }
    }
    for (let [key, value] of Map1){
        if (Map2.has(key)){
            const min = Math.min(value, Map2.get(key));
            for (let i = 0; i < min; i++){
                result.push(key);
            }
        }
    }
    return result;
};

console.log(intersect([1,2,2,1], [2,2])); // [2,2]

console.log(intersect([4,9,5], [9,4,9,8,4])); // [9,4]

console.log(intersect([1,2,3,4,5], [6,7,8,9,10])); // []

// GO

// func intersect(nums1 []int, nums2 []int) []int {
    // freq := make(map[int]int)
    // result := []int{}

    // // Count frequencies of nums1
    // for _, num := range nums1 {
    //         freq[num]++
    // }

    // // Iterate through nums2 and check if it exists in freq with count > 0
    // for _, num := range nums2 {
    //         if count, ok := freq[num]; ok && count > 0 {
    //                 result = append(result, num)
    //                 freq[num]-- 
    //         }
    // }

    // return result
// }