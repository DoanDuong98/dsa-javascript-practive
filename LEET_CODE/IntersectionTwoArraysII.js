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
//     var map1 map[int]int
//     var map2 map[int]int
//     map1 = make(map[int]int)
//     map2 = make(map[int]int)
//     var result []int

//     for _, num1 := range nums1 {
//         _, ok := map1[num1]
//         if ok {
//             map1[num1] = map1[num1] + 1
//         } else {
//             map1[num1] = 1
//         }
//     }

//     for _, num2 := range nums2 {
//         _, ok := map2[num2]
//         if ok {
//             map2[num2] = map2[num2] + 1
//         } else {
//             map2[num2] = 1
//         }
//     }

//     for key, _ := range map1 {
//         var min int
//         value2, ok2 := map2[key]
//         value1, _ := map1[key]
//         if ok2 {
//             if value2 > value1 { 
//                 min = value1
//             } else {
//                 min = value2
//             }
//             for i:=0; i<min;i++ {
//                 result = append(result, key)
//             }
//         }
//     }
//     return result
// }