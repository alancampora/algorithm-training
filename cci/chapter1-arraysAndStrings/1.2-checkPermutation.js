//function permutation(wordA, wordB) {
//if (wordA.length !== wordB.length) {
//return false;
//}

//let result = [...Array(256)];

//for (let i = 0; i < wordA.length; i++) {
//let char = wordA[i];
//result[char]++;
//}

//for (let i = 0; i < wordB.length; i++) {
//let char = wordB[i];
//result[char]--;
//if (result[char] < 0) {
//console.log('char', char, 'result[char]', result[char]);
//return false;
//}
//}

//return true;
//}

function permutation(wordA, wordB) {
    if (wordA.length !== wordB.length) {
        return false;
    }

    for (let i = 0; i < wordA.length; i++) {
        console.log('charA:', wordA[i], 'charB:', wordB[wordB.length - i - 1]);

        if (wordA[i] !== wordB[wordB.length - i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(permutation('alan', 'nala'));
