function removeStars(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    "*" === char ? stack.pop() : stack.push(char);
  }

  return stack.join("");
}

console.log(removeStars("leet**cod*e")); //"lecoe"

console.log(removeStars("erase*****")); //""
