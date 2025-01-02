// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let l = list1, r = list2;
    while( l !== null && r !== null ){
        if (l.val < r.val){
            l = l.next;
        } else {
            let temp = r.next;
            r.next = l;
            l = r;
            r = temp;
        }
    }
    return l || r;
};

console.log(mergeTwoLists());

