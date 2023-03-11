export function isPalindrome(s: string): boolean {
  const strArr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  for (
    let i = 0, j = strArr.length - 1;
    i < strArr.length / 2;
    i += 1, j -= 1
  ) {
    if (strArr[i] !== strArr[j]) {
      return false;
    }
  }

  return true;
}
