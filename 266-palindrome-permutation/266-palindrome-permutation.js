/**
 * @param {string} s
 * @return {boolean}
 */
// var canPermutePalindrome = function(s) {
//     const map = new Map();
//     let oddLettersCount = 0;
//     for (let i = 0; i < s.length; i++) {
//         map.set(s[i], map.get(s[i]) + 1 || 1);
//     }
//     for (let item of map) {
//         if (item[1] % 2) {
//             oddLettersCount++;
//         }
//     }
//     return oddLettersCount <= 1;
// };

const canPermutePalindrome = function (s) {

  let map = new Map()
// 1
  for (let i = 0; i < s.length; i++) {
    const ltr = s[i];
// 2    
    if (map.has(ltr)) {
      map.set(ltr, map.get(ltr) + 1)
    } else {
      map.set(ltr, 1)
    }
  }

  let oddNumOfLtrs = 0
// 3
  for (ltr of map) {
    if (ltr[1] % 2 !== 0) oddNumOfLtrs++
  }
// 4
  return oddNumOfLtrs <= 1
};