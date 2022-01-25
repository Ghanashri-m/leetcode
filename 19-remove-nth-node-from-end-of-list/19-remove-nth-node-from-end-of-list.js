/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let left = dummy
    let right = dummy;
    console.log("left", left)
    console.log("right", right)
    console.log('............1.............')
     while (n-- > -1) {
        right = right.next;
     }
    console.log("left", left)
    console.log("right", right)
    console.log('............2.............')
    while (right) {
      left = left.next;
      right = right.next;
    }
    
    left.next = left.next.next;

    console.log("left", left)
    console.log("right", right)
    console.log("dummy", dummy)
    console.log('............3.............')
    return dummy.next;
};