/*
Description:

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {

    var array = s.split('');
    return newArray = array.map((val, i) => {
        var value = "";

        for (var j = 0; j <= i; j++) {
            if (j == 0) {
                value += val.toUpperCase();
            } else {
                value += val.toLowerCase();
            }
        }
        return value
    }).join("-");
}