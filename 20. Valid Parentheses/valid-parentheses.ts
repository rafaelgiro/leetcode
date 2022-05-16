export function isValid(s: string): boolean {
  const pairs: Record<string, string> = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const res = [];

  for (let i = 0; i < s.length; i += 1) {
    const currentCharacter = s[i];
    const lastCharacter = res[res.length - 1];

    if (
      currentCharacter === "(" ||
      currentCharacter === "[" ||
      currentCharacter === "{"
    ) {
      res.push(currentCharacter);
    } else if (currentCharacter === pairs[lastCharacter]) {
      res.pop();
    } else {
      return false;
    }
  }

  return res.length === 0;
}
