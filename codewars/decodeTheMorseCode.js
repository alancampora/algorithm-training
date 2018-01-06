/*
 *Decode the Morse code
 *
 *Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')});
 * The Morse code table is preloaded for you as a dictionary, feel free to use it. 
 * In CoffeeScript, C++, Go, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: MORSE_CODE['.--']
 */

decodeMorse = function(morseCode){
  let words = morseCode.trim().split('   ');
  return words.reduce(getDecodedWords, "").trim()
}

const getDecodedWords = (acum,word) => (acum += word.split(' ').reduce(getDecodedChars, '') + " ", acum);
  
const getDecodedChars = (acum, char) => (acum += MORSE_CODE[char], acum)

