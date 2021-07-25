/*
Description:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

function solution(str) {

    var word = str;
    var pair = [];
    var final = "";

    for (var i = 0; i < word.length; i++) {
        var letter = word.charAt(i);

        if (final.length < 2) {
            final = final + letter
        }

        if (letter == word.charAt(word.length - 1) && word.length % 2 != 0) {
            final = final + "_"
        }

        if (final.length >= 2) {
            pair.push(final);
            final = ""
        }

    }
    return pair

}