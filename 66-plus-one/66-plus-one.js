/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length, carry=0;
    if(digits[n-1]<9){
        digits[n-1] +=1;        
    } else{
        digits[n-1] = 0;
        carry=1;
        for(let i=n-2;i>=0;i--){
            if(digits[i]<9){
                digits[i]+=1;
                carry=0;
                break;
            }else{
                digits[i]=0;
            }
        }
        if(carry>0){
            digits.unshift(carry);
        }
    }
    return digits;  
};
