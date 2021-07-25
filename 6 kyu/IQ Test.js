/*
Description:

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

*/

function iqTest(numbers) {

    var input = numbers.match(/(\d+)/g);
    var odd = [];
    var even = [];

    for (var i = 0; i < input.length; i++) {

        var number = input[i];

        if (number % 2 === 0) {
            even.push(number)
        } else {
            odd.push(number)
        }
    }

    if (even.length > odd.length) {
        return input.indexOf(odd[0]) + 1;
    } else {
        return input.indexOf(even[0]) + 1;
    }

}