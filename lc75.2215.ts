function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    [...set1].filter((item) => !set2.has(item)),
    [...set2].filter((item) => !set1.has(item)),
  ];
}

// console.log(JSON.stringify(findDifference([1, 2, 3], [2, 4, 6])));
// [[1,3],[4,6]]
