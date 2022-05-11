export function longestCommonPrefix(strs: string[]): string {
  let res = strs[0];

  for (let i = 1; i < strs.length; i += 1) {
    const word = strs[i];
    const loopLength = word.length > res.length ? word.length : res.length;

    for (let j = 0; j < loopLength; j += 1) {
      if (word[j] !== res[j]) res = res.substring(0, j);
    }
  }

  return res;
}
