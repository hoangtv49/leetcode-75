function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxContainer = 0;

  while (left < right) {
    const xAxis = right - left;
    const yAxis = Math.min(height[left], height[right]);

    const water = xAxis * yAxis;

    if (water > maxContainer) {
      maxContainer = water;
    }

    height[left] < height[right] ? left++ : right--;
  }

  return maxContainer;
}
