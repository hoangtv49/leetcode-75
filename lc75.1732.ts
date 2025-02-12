function largestAltitude(gain: number[]): number {
  let max = 0;

  gain.reduce((a, b) => {
    if (a + b > max) max = a + b;

    return a + b;
  }, 0);

  return max;
}

// console.log(largestAltitude( [-5,1,5,0,-7]));
// 1
