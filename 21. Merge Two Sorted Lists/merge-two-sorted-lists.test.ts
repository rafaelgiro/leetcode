import { mergeTwoLists } from "./merge-two-sorted-lists";

describe("mergeTwoLists", () => {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  it("returns [1,1,2,3,4,4] for `list1 = [1,2,4], list2 = [1,3,4]`", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const list3 = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    );

    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });

  it.skip("returns [] for `list1 = [], list2 = []`", () => {
    const list1 = new ListNode();
    const list2 = new ListNode();
    const list3 = new ListNode();

    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });

  it.skip("returns [0] for `list1 = [], list2 = [0]`", () => {
    const list1 = new ListNode();
    const list2 = new ListNode(0);

    expect(mergeTwoLists(list1, list2)).toEqual(new ListNode(0));
  });

  it("returns [0,1,1,1,4] for `list1 = [0,4], list2 = [1,1,1]`", () => {
    const list1 = new ListNode(0);
    list1.next = new ListNode(4);

    const list2 = new ListNode(1);
    list2.next = new ListNode(1);
    list2.next.next = new ListNode(1);

    const list3 = {
      val: 0,
      next: {
        val: 1,
        next: { val: 1, next: { val: 1, next: { val: 4, next: null } } },
      },
    };

    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });
});
