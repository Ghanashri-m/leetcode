/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
   let [e, s] = [reader.get(0), 0];
    e < 0 ? e = Math.abs(e) + target : e = target;


    while (s <= e) {
        let mid = Math.floor((e - s) / 2) + s; // to avoid over flow. Same as (s+e)/2
        let g = reader.get(mid);
        
        if (g === target) {
            return mid;
        } else if (g > target) {
            e = mid - 1;
        } else {
            s = mid + 1
        }
    }
    return -1;
};