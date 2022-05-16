# 20. Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example 1:

```text
Input: s = "()"
Output: true
```

Example 2:

```text
Input: s = "()[]{}"
Output: true
```

Example 3:

```text
Input: s = "(]"
Output: false
```

Constraints:

```text
-   `1 <= s.length <= 104`
-   `s` consists of parentheses only `'()[]{}'`.
```