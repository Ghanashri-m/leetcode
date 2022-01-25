/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let currentNode = node;
    let lastNode = node;
    
    while (currentNode.next) {
        currentNode.val = currentNode.next.val;
        lastNode = currentNode;
        currentNode = currentNode.next;
    }
    lastNode.next = null;
};