/**
 * Function to convert Roman Numerals to Integer
 *
 * @param s roman numeral between 1 and 3999
 * @returns integer value for roman numeral
 */
export function romanToInt(s: string): number {
  const singularValues: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; i += 1) {
    const curr = singularValues[s[i]];
    const prev = singularValues[s[i - 1]] || 0;

    if (curr > prev) res += curr - prev - prev;
    else res += curr;
  }

  return res;
}
