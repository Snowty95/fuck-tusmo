const words = require('an-array-of-french-words');

let start = "lac"
let letters = "se"
let cant = "zrt"
let number = 9;
let atIndex = {
    7: 'e'
 }
let noAtIndex = {
    4: 's',
    5: 's',
    6: 'e'
}

words.filter(m => {
    if(m.length === number && m.substring(0, start.length) === start) {
        let isGood = true;
        let nbLetterFound = 0;
        for(let i in m) {
            if(cant.includes(m[i])) {
                isGood = false;
            } else if(letters.includes(m[i])) {
                nbLetterFound++
            }
            if(atIndex[i] != null && atIndex[i] !== m[i]) {
                isGood = false;
            }
            if(noAtIndex[i] === m[i]) {
                isGood = false;
            }
        }
        if(isGood && nbLetterFound === letters.length) {
            console.log(m);
        }
    }
})