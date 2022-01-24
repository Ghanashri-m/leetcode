/**
 * @param {number} n
 * @return {number[][]}
 */
var generate = function(n) {
    let output = [];
    for (let line = 0; line < n; line++)
    {
        // Every line has number of
        // integers equal to line number
        let subArray = [];
        for (let i = 0; i <= line; i++) {
            subArray.push(binomialCoeff(line, i));
        }
        output.push(subArray);
    }
    return output;
};

function binomialCoeff(n, k)
    {
        let res = 1;
         
        if (k > n - k)
        k = n - k;
        // console.log("The value of n", n)
        // console.log("The value of k", k)
             
        for (let i = 0; i < k; ++i)
        {
            // console.log("The value of i", i)
            res *= (n - i);
            res /= (i + 1);
        }
        // console.log("The value of res", res)
        // console.log("-----------------------------------------------------------------------------------------------")
        return res;
    }
