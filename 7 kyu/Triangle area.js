/*
Description:

Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

Hints

Ignore dots.

Example:

.
.      .  
.      .       .      ---> should return 2.0

.
.      .  
.      .       .     
.      .       .      .      ---> should return 4.5

*/

function tArea(tStr) {
  
    let arr = tStr.split( '\n').filter( e => e != '');
    let arrLen = arr.length - 1;
    let dots = (arr[arr.length - 1]).replace(/\s/g, "").length -1;

    return (arrLen * dots) / 2

}