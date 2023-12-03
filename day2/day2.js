import { data, exampleData } from './day2data.js';

var dataArray = data.split("\n");

var filter = [[12, "red"], [13, "green"], [14, "blue"]]
let minimumDices = [[0, "red"], [0, "green"], [0, "blue"]]

var total = 0;
var powerTotal = 0;
//Part one

//Make an Array containing per entry an array with all the throws which contains per throw what dices have been threwn
const gameList = dataArray.map((currentEntry, index) => {
    let exceeded = false;
    let minimumDices = [[0, "red"], [0, "green"], [0, "blue"]]
    const hands = currentEntry.replace(/^.+: /, '').split("; ").map((currentMatch) => {
        const handContent = currentMatch.split(", ").map((currentHand) => {
            const dice = currentHand.split(" ");

            //Part One
            filter.map((currentFilter) => {
                if(currentFilter[1] == dice[1])
                {
                    if ( Number(dice[0]) > currentFilter[0]) {
                        //This should match if the value of the current dice is matching or below the filter we must apply.
                        exceeded = true;
                        //console.log("Rolled: " + Number(dice[0]) + " Filter: " + currentFilter[0])
                    }
                }
            });

            //Part Two
            //let minimumDices = [[0, "red"], [0, "green"], [0, "blue"]]
            minimumDices.map((minimumDices) => {
                if(minimumDices[1] == dice[1])
                {
                    if (Number(dice[0] > minimumDices[0])) {
                        minimumDices[0] = Number(dice[0])
                        //This should match if the value of the current dice is matching or below the filter we must apply.
                        exceeded = true;
                        //console.log("Rolled: " + Number(dice[0]) + " Filter: " + currentFilter[0])
                    }
                }
            });
            return dice;
        });
        return handContent
    });
    if (!exceeded)
        total += index+1;

    //Power of the minimum amount of dice
    const poweredNumbers = minimumDices.map(innerArr => {
        if (typeof innerArr[0] === 'number') {
          return innerArr[0];
        }
    }).reduce((acc, curr) => acc * curr, 1);;

    powerTotal+= poweredNumbers;

    return hands;
});

console.log(total);

console.log(powerTotal);

//console.log(gameList);