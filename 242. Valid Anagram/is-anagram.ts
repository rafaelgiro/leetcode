export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let map: Record<string, number> = {};

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    map[c] = (map[c] || 0) + 1;
  }

  for (let i = 0; i < t.length; i += 1) {
    const c = t[i];
    if (!map[c]) return false;
    map[c]--;
  }

  return true;
}
