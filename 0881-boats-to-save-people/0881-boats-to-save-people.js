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
    for (let i in people) {
        if (lightest === heaviest) {
            boats++;
            break;
        }
        if (lightest > heaviest) {
            break;
        }
        if (people[lightest] + people[heaviest] <= limit) {
            boats++;
            lightest++;
            heaviest--;
        } else {
            boats++;
            heaviest--;
        }
    }
    return boats;
};