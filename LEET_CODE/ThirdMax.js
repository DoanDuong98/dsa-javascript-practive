// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax1 = function(nums) {
    nums.sort((a, b) => b - a);
    return [...new Set(nums)][2] ?? Math.max(...nums);
};

var thirdMax2 = function(nums) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > first){
            first = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > second && nums[i] < first){
            second = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > third && nums[i] < second){
            third = nums[i];
        }
    }
    return third !== -Infinity ? third : first;
};

var thirdMax3= function(nums) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > first){
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second && nums[i] < first){
            third = second;
            second = nums[i];
        } else if (nums[i] > third && nums[i] < second){
            third = nums[i];
        }
    }
    return third !== -Infinity ? third : first;
};


console.log(thirdMax3([1 ,  2]));
