import { data } from './day1data.js';

var dataArray = data.split("\n");

//List of replacements to check for
const replacements = [["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9]]

//Regex to return matches with seperate numbers and text
const testRegex = /\d+|[a-z]+/g;

let total = 0;

//For every entry in the data we iterate through it
const numberList = dataArray.map((currentValue) => {
    //Returning the regex match that splits the data
    const matchCharacters = currentValue.match(testRegex);

    //If the last entry of the regex match is a string check for the words starting from the right and slowly creep to the left
    if (/^[A-Za-z]+$/.test(matchCharacters[matchCharacters.length - 1])) {
        let currentData = matchCharacters[matchCharacters.length - 1];
        let size = 1;
        let run = true;
        while (run) {
            replacements.some((replacementNumber) => {
                if (currentData.substring(currentData.length - size, currentData.length).match(replacementNumber[0])) {
                    currentData = currentData.replace(currentData.substring(currentData.length - size, currentData.length), replacementNumber[1])
                    matchCharacters[matchCharacters.length - 1] = currentData;
                    run = false;
                    return true;
                }
            });
            if (size < currentData.length) /* -succes? */ {
                size++;
            }
            else {
                if(run)
                    matchCharacters[matchCharacters.length - 1] = "";
                run = false;
            }
        }

    }
    //If the first entry in the array is a string scan for the words from left to right
    if (/^[A-Za-z]+$/.test(matchCharacters[0])) {
        let currentData = matchCharacters[0];
        let size = 1;
        let run = true
        while (run) {
            replacements.some((replacementNumber) => {
                if (currentData.substring(0, size).match(replacementNumber[0])) {
                    currentData = currentData.replace(currentData.substring(0, size), replacementNumber[1])
                    matchCharacters[0] = currentData;
                    run = false;
                    return true;
                }
            });
            if (size < currentData.length) /* -succes? */ {
                size++;
            }
            else {
                if(run)
                    matchCharacters[0] = "";
                run = false;
            }
        }
    }
    //Above can probably easily be merched into 1 function but time etc.

    //Replacing empty fields in the array and deleting all strings in the array
    currentValue = matchCharacters.filter(entry => entry).join('').replace(/[A-Za-z]/g, "");

    //If there is only 1 value left we duplicate it since that will be the first and last digit. Else we take the first and last value
    if (currentValue.length == 1) {
        currentValue = currentValue + "" + currentValue;
    }
    else {
        currentValue = currentValue[0] + currentValue[currentValue.length - 1];
    }

    //Count the total
    total += Number(currentValue)

    //Hurray the result

});

//Hurray the result
console.log(total);