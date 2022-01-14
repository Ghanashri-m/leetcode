/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let count = 0;
    let origin = s.split("");
    do {
        let item = origin.shift();
        origin.push(item);
        if (origin.join("") === goal) {
            return true;
        }
        count++;
    } while (count !== s.length);
    
    return false;
};