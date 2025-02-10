function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  return str1.substring(0, gcd(str1.length, str2.length));
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
