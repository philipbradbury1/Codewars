/*
Description:

Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

Here's a keypad for visualization.

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. Could you write a program to do this for us?

Write a funciton called decode(). Given an encoded string, return the actual phone number in string form. Don't worry about input validation, parenthesies, or hyphens.

*/
function decode(string) {

    let arr = string.split('');
    
    for(var i = 0; i < arr.length; i++){
      
      switch(arr[i]){
          case '1':
            arr[i] = 9;
          break;
          case '2':
            arr[i] = 8;
          break;
          case '3':
            arr[i] = 7;
          break;
          case '4':
            arr[i] = 6;
          break;
          case '5':
            arr[i] = 0;
          break;
          case '6':
            arr[i] = 4;
          break;
          case '7':
            arr[i] = 3;
          break;
          case '8':
            arr[i] = 2;
          break;
          case '9':
            arr[i] = 1;
          break;
          case '0':
            arr[i] = 5;
          break;
        
      }
    }
    
    return arr.join('');
}