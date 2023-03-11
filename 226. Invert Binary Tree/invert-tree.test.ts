import { invertTree } from "./invert-tree";

describe("invertTree", () => {
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

  it("inverts [4,2,7,1,3,6,9] to [4,7,2,9,6,3,1]", () => {
    const originalTree = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7, new TreeNode(6), new TreeNode(9))
    );

    const invertedTree = new TreeNode(
      4,
      new TreeNode(7, new TreeNode(9), new TreeNode(6)),
      new TreeNode(2, new TreeNode(3), new TreeNode(1))
    );

    expect(invertTree(originalTree)).toEqual(invertedTree);
  });

  it("inverts [2,1,3] to [2,3,1]", () => {
    const originalTree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const invertedTree = new TreeNode(2, new TreeNode(3), new TreeNode(1));

    expect(invertTree(originalTree)).toEqual(invertedTree);
  });

  it("inverts [1,10,3] to [1,3,10]", () => {
    const originalTree = new TreeNode(1, new TreeNode(10), new TreeNode(3));
    const invertedTree = new TreeNode(1, new TreeNode(3), new TreeNode(10));

    expect(invertTree(originalTree)).toEqual(invertedTree);
  });
});
