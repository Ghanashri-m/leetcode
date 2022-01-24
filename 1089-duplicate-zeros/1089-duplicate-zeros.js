/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 0;
    while(i<arr.length)
    {
        if(arr[i]===0)
        {
            let j=arr.length-1;
            while(j != i)
            {
                arr[j]=arr[j-1];
                j--;
            }
            i=i+2;
        }
        else
        {
            i=i+1;
        }
    }
    console.log(arr);
};