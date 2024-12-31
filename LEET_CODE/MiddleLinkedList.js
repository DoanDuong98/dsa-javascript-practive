// https://leetcode.com/problems/middle-of-the-linked-list/description/?source=submission-ac

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let f = head,
    s = head;
  while (f !== null && f.next !== null) {
    s = s.next;
    f = f.next.next;
  }
  return s;
};

console.log(
  middleNode({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: { val: 5, next: { val: 6, next: { val: 7, next: { val: 8, next: null } } } },
        },
      },
    },
  })
);
