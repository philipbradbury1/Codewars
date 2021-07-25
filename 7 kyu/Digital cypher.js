/*
Description:

Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts str string and key number and returns an array of integers representing encoded str.

Input / Output
The str input string consists of lowercase characters only.
The key input number is a positive integer.

Example
Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

*/

function encode(str, n) {

    var array = str.split("");
    var number = n.toString().split("");
    var count = 0;
    var newArray = array.map((val) => {

        switch (val) {
            case "a":
                val = 1;
                break;
            case "b":
                val = 2;
                break;
            case "c":
                val = 3;
                break;
            case "d":
                val = 4;
                break;
            case "e":
                val = 5;
                break;
            case "f":
                val = 6;
                break;
            case "g":
                val = 7;
                break;
            case "h":
                val = 8;
                break;
            case "i":
                val = 9;
                break;
            case "j":
                val = 10;
                break;
            case "k":
                val = 11;
                break;
            case "l":
                val = 12;
                break;
            case "m":
                val = 13;
                break;
            case "n":
                val = 14;
                break;
            case "o":
                val = 15;
                break;
            case "p":
                val = 16;
                break;
            case "q":
                val = 17;
                break;
            case "r":
                val = 18;
                break;
            case "s":
                val = 19;
                break;
            case "t":
                val = 20;
                break;
            case "u":
                val = 21;
                break;
            case "v":
                val = 22;
                break;
            case "w":
                val = 23;
                break;
            case "x":
                val = 24;
                break;
            case "y":
                val = 25;
                break;
            case "z":
                val = 26;
                break;
        }

        var add = number[count];
        count++;

        if (count >= number.length) {
            count = 0
        }

        return val + parseInt(add)
    })
    return newArray;
}