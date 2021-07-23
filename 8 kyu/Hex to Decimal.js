/*
Description:

Complete the function which converts hex number (given as a string) to a decimal number.

*/

function hexToDec(hexString){
    //your code here
    
    var hexSplit = hexString.split('');
    var negative = false;
    
    hexSplit.reverse();
    
    for (var i = 0; i < hexSplit.length; i++){
    
    
        switch(hexSplit[i]){
        
        case'a':
          hexSplit[i] = 10;
          break;
        case'b':
          hexSplit[i] = 11;
          break;
        case'c':
          hexSplit[i] = 12;
          break;
        case'd':
          hexSplit[i] = 13;
          break;
        case'e':
          hexSplit[i] = 14;
          break;
        case'f':
          hexSplit[i] = 15;
          break;
        case'A':
          hexSplit[i] = 10;
          break;
        case'B':
          hexSplit[i] = 11;
          break;
        case'C':
          hexSplit[i] = 12;
          break;
        case'D':
          hexSplit[i] = 13;
          break;
        case'E':
          hexSplit[i] = 14;
          break;
        case'F':
          hexSplit[i] = 15;
          break;
        case'-':
          negative = true;
          break;
        default:
          hexSplit[i] = hexSplit[i];  
          
        }
    
   }
   
  
    
    for (var i = 0; i < hexSplit.length; i++){
    console.log("math", hexSplit[i])
    
        hexSplit[i] = (hexSplit[i] * (Math.pow(16, i)));
        
    }
    
    var number = 0;
    
     hexSplit.forEach(function(item){
     
       console.log("item",item)
       
       if(isNaN(item)){
         item = 0;
       }
     
       number += parseInt(item)
     
     })
    
    
    console.log(number)
    
    if(negative == true){
    return  number - (number * 2)
    }else{
    
    return number
    }
    
    }