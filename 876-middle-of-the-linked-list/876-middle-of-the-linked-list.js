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
var middleNode = function(head) {
    if (!head) {
        return;
    }
    if (!head.next) {
        return head;
    }
    let size = 0;
    let curr = head;
    
    while (curr) {
        size++;
        curr = curr.next;
    }
    
    let counter = size % 2 === 0 ? (size/2) + 1 : Math.ceil(size/2);
    
    let flag = 1;
    let prev = head;
    
    while (flag < counter) {
        flag++;
        prev = prev.next;
    }
    return prev;
    
};