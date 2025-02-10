/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const zeros: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros.push(nums.splice(i, 1)[0]);
      i--;
    }
  }
  nums.push(...zeros);
}
