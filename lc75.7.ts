function productExceptSelf(nums: number[]): number[] {
  const numberOfZeros = nums.filter((num) => num === 0).length;

  if (numberOfZeros > 1) {
    return Array(nums.length).fill(0);
  } else if (numberOfZeros === 1) {
    const product = nums.filter((num) => num !== 0).reduce((a, b) => a * b, 1);
    return nums.map((num) => (num === 0 ? product : 0));
  } else {
    const product = nums.reduce((a, b) => a * b, 1);
    return nums.map((num) => product / num);
  }
}