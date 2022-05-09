const words = require('an-array-of-french-words');

let start = "bau"
let letters = [ ];
let cant = [];
let number = 6;
let atIndex = {
    8: 'e'
 }
let noAtIndex = {
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
            if(atIndex[i] != null) {
                console.log("i : " + atIndex[i]);
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