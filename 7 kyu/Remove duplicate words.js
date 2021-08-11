/*
Description:

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

*/



function removeDuplicateWords (s) {

    var stringArr = s.split(' ');
    var newArr= []
   
    for(var i = 0; i < stringArr.length; i++){
       
        var word = stringArr[i];
        if(!newArr.includes(word)){
          newArr.push(word)
        }
    }
  
    return newArr.join(' ');
  }