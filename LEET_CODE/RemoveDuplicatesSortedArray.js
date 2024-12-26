var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0 || n === 1) return n;
  let i = 1, j = i;
  while (j < n) {
    if (nums[i-1] == nums[j]) {
      j++;
    } else {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,2,2,3,3,4])); // [0,1,2,3,4]
