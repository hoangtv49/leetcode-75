function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const a: string[] = s.split("");
  const vowelsInWord = a.filter((v) => vowels.includes(v));
  return a.map((v) => (vowels.includes(v) ? vowelsInWord.pop() : v)).join("");
}
