function equalPairs(grid: number[][]): number {
  const map: Map<string, number> = new Map();
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i].reduce((a, b) => a + b + ",", "");

    map.set(row, (map.get(row) || 0) + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    const col = grid.reduce((a, b) => a + b[i] + ",", "");

    const match = map.get(col);

    if (match) count += match;
  }

  return count;
}

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
// 1;

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
// 3;

console.log(
  equalPairs([
    [13, 13],
    [13, 13],
  ])
);
// 4