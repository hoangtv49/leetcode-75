function maxVowels(s: string, k: number): number {
  const set = new Set(["a", "e", "i", "o", "u"]);
  let current = s
    .slice(0, k)
    .split("")
    .reduce((a, b) => a + (set.has(b) ? 1 : 0), 0);
  let maxVowels = current;

  for (let i = k; i < s.length; i++) {
    if (set.has(s[i])) current++;
    if (set.has(s[i - k]) && current > 0) current--;
    if (current > maxVowels) maxVowels = current;
  }

  return maxVowels;
}
