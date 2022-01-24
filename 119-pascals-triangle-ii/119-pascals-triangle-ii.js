/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let output = [];
    for (let i = 0; i <= rowIndex; i++) {
        output.push(binomialCoeff(rowIndex, i));
    }
    return output;
};
function binomialCoeff(n, k)
    {
        let res = 1;
         
        if (k > n - k)
        k = n - k;
             
        for (let i = 0; i < k; ++i)
        {
            res *= (n - i);
            res /= (i + 1);
        }
        return res;
    }

console.log(getRow(4));