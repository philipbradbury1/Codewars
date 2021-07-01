/*
Description:

Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "Codewars" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Case doesn't matter
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
 */

function sortVowels(s){
   
    if(s == undefined || typeof(s) == 'number') return ''
    let arr = s.split('');
    
    for(var i = 0; i < arr.length; i++){
      
      let newLine = (i != 0 )? '\n' : ''; 
      
      if(arr[i].match(/[aeiou]/gi)){
        arr[i] = newLine + '|' + arr[i] ;
      }else{
        arr[i] = newLine +arr[i] + '|' ;
      }
  
    }
    return arr.join('')
    
  }
