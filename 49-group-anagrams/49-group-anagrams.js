/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let answerMap = new Map();
    
    strs.forEach((word) => {
        let sortedWord = word.split("").sort().join("");
        if (answerMap.has(sortedWord))
            answerMap.get(sortedWord).push(word)
        else
            answerMap.set(sortedWord, [word])
    });
    
    let result = []
    answerMap.forEach((value, key) => {
        result.push(value)
    })
    
    return result;
};