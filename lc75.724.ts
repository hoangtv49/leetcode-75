function pivotIndex(nums: number[]): number {
  let sum = nums.reduce((a, b) => a + b, 0);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    left += nums[i - 1] || 0;
    const right = sum - left - nums[i];

    if (left === right) return i;
  }

  return -1;
}

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// 3

// console.log(pivotIndex([2, 1, -1]));
// -1

// function pivotIndex(nums: number[]): number {
//     for (let i = 0; i < nums.length; i++) {
//       const left = nums.slice(0, i).reduce((a, b) => a + b, 0);
//       const right = nums.slice(i + 1).reduce((a, b) => a + b, 0);

//       if (left === right) return i;
//     }

//     return -1;
//   }
