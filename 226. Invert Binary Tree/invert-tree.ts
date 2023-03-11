class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const { left } = root;

  root.left = root.right;
  root.right = left;

  if (root.right) invertTree(root.right);
  if (root.left) invertTree(root.left);

  return root;
}
