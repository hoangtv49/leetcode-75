function longestSubarray(nums: number[]): number {
  if (nums.every((n) => n === 1)) return nums.length - 1;

  let l = 0;
  let r = 0;
  let max = 0;
  let ones = 0;
  let zeros = 0;

  while (r < nums.length) {
    nums[r] === 1 ? ones++ : zeros++;
    if (ones > max && zeros === 1) max = ones;
    if (zeros > 1) {
      nums[l] === 1 ? ones-- : zeros--;
      l++;
    }
    r++;
  }
  return max;
}

// console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
// 5

// console.log(longestSubarray([1, 1, 0, 1]));
// 3
