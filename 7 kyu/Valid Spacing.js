/*
Description:

Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

*/

function validSpacing(s) {

    let arr = s.split('');
    
    for(var i = 0; i < arr.length; i++){
      
      let cur = arr[i];
      let prev = arr[i -1]
      
      if(arr[0] == ' ' || arr[arr.length -1] == ' ' ||  (cur == ' ' && prev == ' ')  ){
        return false
      }
      
    }
    return true
    
}