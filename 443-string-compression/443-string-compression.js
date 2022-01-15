/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    chars.push("End");
    let count = 0;
    let current = chars[0];
    
    while (current !== "End") {
        if (chars[0] === current) {
            count++;
            chars.shift();
        } else { 
            chars.push(current);
            count > 1 && chars.push(...(count + ''));
            count = 0;
            current = chars[0];
        } 
    }
    
    chars.shift();
    
    return chars.length;
};
