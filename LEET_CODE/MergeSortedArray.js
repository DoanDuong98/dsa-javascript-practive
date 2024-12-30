// https://leetcode.com/problems/merge-sorted-array/description/



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function(nums1, m, nums2, n) {
    if (n === 0) return nums1;
    if (m === 0) return nums2;
    for (let i = 0; i < n; i++) {
        nums1[m+i] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
    return nums1;
};

var merge2 = function(nums1, m, nums2, n) {
    if (n === 0) return nums1;
    if (m === 0) return nums2;
    let result = [], i = 0, j = 0;
    while (result.length < m+n) {
        if (i < m && nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    return result;
};


var merge3 = function(nums1, m, nums2, n) {
    if (n === 0) return nums1;
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    };
    let i = m - 1, j = n - 1, k = m+n-1;
    while (i >= 0 || j >= 0) {
        if (i < 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
            continue;
        }
        if (j < 0) {
            nums1[k] = nums1[i];
            i--;
            k--;
            continue;
        }
        console.log(i, j, k);
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    return nums1
};


console.log(merge3([2,0], 1 , [1], 1)); // [1,2,2,3,5,6]
