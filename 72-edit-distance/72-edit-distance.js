/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {    
    // let matrix = Array(word1.length + 1).fill(Array(word2.length + 1).fill(0));
    let matrix = Array.from({length:word1.length+1}, ()=>(Array.from({length:word2.length+1},()=>(0))))
    matrix[word1.length].forEach((e,i)=>{
        matrix[word1.length][i] = word2.length - i
    })
    matrix.forEach((e,j)=>{
        matrix[j][word2.length] = word1.length - j
    })
    for(let i = word1.length-1; i>=0; i--){
        for(let j = word2.length-1; j>=0; j--){
            if(word1[i] == word2[j]){
                matrix[i][j] = matrix[i+1][j+1]
            }else{
                matrix[i][j] = 1 + Math.min(matrix[i+1][j+1], matrix[i+1][j], matrix[i][j+1])
            }
        }
    }
    return matrix[0][0]
};