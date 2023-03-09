/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b); // complexity n
    let lightest = 0;
    let heaviest = people.length - 1;
    let boats = 0;
    while (lightest <= heaviest) {
        if (lightest === heaviest) {
          boats++;
          break;    
        }
        if (people[lightest] + people[heaviest] <= limit) {
            lightest++;
        } 
        boats++;
        heaviest--;
    }
    return boats;
};