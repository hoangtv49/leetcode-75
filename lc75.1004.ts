function longestOnes(nums: number[], k: number): number {
  let l = 0;
  let r = 0;
  let maxOne = 0;
  let zeros = 0;
  let ones = 0;

  while (r < nums.length) {
    nums[r] === 1 ? ones++ : zeros++;
    if (ones > maxOne) maxOne = ones;
    if (zeros > k) {
      nums[l] === 1 ? ones-- : zeros--;
      l++;
    }
    r++;
  }

  return r - l;
}

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
//6

// console.log(
//   longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
// );
//10

// function longestOnes(nums: number[], k: number): number {
//     let max = 0;
//     for (let i = 0; i < nums.length; i++) {
//       let numberOfZero = 0;
//       let numberOfOne = 0;

//       for (let j = i; j < nums.length; j++) {
//         if (nums[j] === 0) numberOfZero++;
//         if (nums[j] === 1) numberOfOne++;

//         if (numberOfOne > max) {
//           max = numberOfOne;
//         }

//         if (numberOfZero > k) break;
//       }
//     }

//     return max + k > nums.length ? nums.length : max + k;
//   }
