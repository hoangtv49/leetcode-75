function maxOperations(nums: number[], k: number): number {
  let res = 0;
  let left = 0;
  let right = nums.length - 1;
  const sorted = nums.sort((a, b) => a - b);
  const matchResult: number[] = [];

  while (left < right) {
    const lVal: number = sorted[left];
    const rVal: number = sorted[right];
    const sum = lVal + rVal;

    if (sum === k) {
      res++;
      matchResult.push(lVal, rVal);
      left++;
    }

    sum < k ? left++ : right--;
  }

  // for (let i = 0; i < nums.length; i++) {
  //   const j = matchResult.indexOf(nums[i]);

  //   if (j >= 0) {
  //     nums.splice(i, 1);
  //     matchResult.splice(j, 1);
  //     i--;
  //   }
  // }

  return res;
}

console.log(
  maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)
);
