function uniqueOccurrences(arr: number[]): boolean {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < arr.length; i++) {
    const value = map.get(arr[i]) || 0;

    map.set(arr[i], value + 1);
  }

  return map.size === new Set(map.values()).size;
}

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
//true
