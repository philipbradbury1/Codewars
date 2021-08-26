/*
Description:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid

*/

function high(x){
  
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  const words = x.split(' ')

  let scores = words.map( word => [...word].map(l => alpha.indexOf(l) + 1)).map(word => word.reduce((a,b) => a + b, 0 ))
 
  return words[scores.indexOf(Math.max(...scores))]
  
}