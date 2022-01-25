/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const firstHalf = new ListNode(0, head);
	const temp = new ListNode(0, head);
    // firstHalf.next = temp.next = head;
    let first = firstHalf;
	let curr = temp;
    console.log("...............Before loop...................")
    console.log('temp', temp)
    console.log('firstHalf', firstHalf)
    console.log('curr', curr)
    console.log('first', first)
    while (curr.next) {
        console.log(".............loop start.....................")
        console.log('temp', temp)
        console.log('firstHalf', firstHalf)
        console.log('curr', curr)
        console.log('first', first)
		if (curr.next.val < x) {
			first = first.next;
			curr.next = curr.next.next;
		} else {
			first.next = first.next.next;
			curr = curr.next;
		}
        console.log("................loop end..................")
        console.log('temp', temp)
        console.log('firstHalf', firstHalf)
        console.log('curr', curr)
        console.log('first', first)
	}
    console.log("...............after loop...................")
    console.log('temp', temp)
    console.log('firstHalf', firstHalf)
    console.log('curr', curr)
    console.log('first', first)
	first.next = temp.next;
    console.log("...............final change...................")
    console.log('temp', temp)
    console.log('firstHalf', firstHalf)
    console.log('curr', curr)
    console.log('first', first)
	return firstHalf.next;
};