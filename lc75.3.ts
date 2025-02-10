function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  return candies.map((candy) => {
    return candies.every((c1) => c1 <= candy + extraCandies);
  });
}
