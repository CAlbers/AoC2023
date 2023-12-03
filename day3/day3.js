import { data, exampleData } from './day3data.js';

var dataArray = exampleData.split("\n");
var symbolList = ["!", "@", "#", "$", "%", "&", "*", "+", "-", "/", "="]
var total = 0;

const newArray = dataArray.map((currentEntry, rowIndex) => {
    const lineArray = currentEntry.split("");
    const foundSymbol = symbolList.some((symbol) => {
        if (currentEntry.includes(symbol)) {
            const index = currentEntry.indexOf(symbol);
            console.log("Found match on row " + rowIndex + " on spot " + index)
            //Found symbol now swoop around

            //Look left
            let counter = 1;
            while (true)
            {
                if(index - counter >= 0 && Number.isInteger(Number(currentEntry[index - counter])))
                {
                    counter++;
                }
                else if(counter > 1)
                {
                    let partNumber = currentEntry.substring(index-(counter-1),index);
                    total+= Number(partNumber)
                    currentEntry.replace(partNumber, match => '.',repeat(match.length));
                }
                else
                    break;

            }
            if (index - 1 >= 0 && Number.isInteger(currentEntry[index - 1])) {
                //We know we're not on the edge and to the left is a digit. Now further loop to the left

            }

            //Look right

            //Look up and diagonally up

            //Look down and diagonally down


            //Replace any number found against double hits


        }

    });
});
//Search for symbols and then swoop around to check if there are any numbers
//!@#$%&*+-/=