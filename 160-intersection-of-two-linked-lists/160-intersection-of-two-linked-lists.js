/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    if(!headA || !headB) return null;
    
    let first = headA;
    let second = headB;

    while(first !== second) {
        if(!first){
            first = headB;
        } else{
            first = first.next
        }
        
        if(!second){
            second = headA;
        } else {
            second = second.next;
        }   
    }
    return first;
    
};