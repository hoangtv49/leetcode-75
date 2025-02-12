function findMaxAverage(nums: number[], k: number): number {
  let maxSum: number = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let currentSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum + nums[i] - nums[i - k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum / k;
}
