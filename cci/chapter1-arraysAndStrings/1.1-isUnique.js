/*
  * Determine if string has all unique characters
  * assuem ascii chars (256)
  */

function uniqueCharacters(word) {
    let hash = [...Array(256)];

    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        let position = c.charCodeAt(0);
        if (hash[position] == c) {
            return false;
        }

        hash[position] = c;
    }

    return true;
}

console.log(uniqueCharacters('alxn'));
