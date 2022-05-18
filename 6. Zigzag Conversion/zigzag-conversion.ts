export function convert(s: string, numRows: number): string {
  const arr: string[] = [];
  let forward = true;
  let lastIndex = -1;

  for (let i = 0; i < s.length; i += 1) {
    const indexToPut = lastIndex + (forward ? 1 : -1);
    lastIndex = indexToPut;
    arr[indexToPut] = (arr[indexToPut] || "") + s[i];
    if (i % (numRows - 1) === 0 && i !== 0) forward = !forward;
  }

  return arr.join("");
}
