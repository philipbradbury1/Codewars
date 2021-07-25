/*
Description:

Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113

*/

function hexHash(code){
    var hex = '';
    for(var i=0;i<code.length;i++) {
      hex += ''+code.charCodeAt(i).toString(16);
    }
    console.log(hex.replace(/\D/g,'').split(''))
     return hex.replace(/\D/g,'').split('').map(Number).reduce((acc, val) => {return acc + val;},0); 
}