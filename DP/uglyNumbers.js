/*
Ugly Numbers
Ugly numbers are numbers whose only prime factors are 2, 3 or 5. 
The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included.

Given a number n, the task is to find n’th Ugly number.

Examples:

    Input  : n = 7
    Output : 8

    Input  : n = 10
    Output : 12

    Input  : n = 15
    Output : 24

    Input  : n = 150
    Output : 5832

*/

function printUglyNumbers(lastNumber) {

    let uglyNumbers = new Array(lastNumber);
    uglyNumbers[0] = 1;
    let i2 = 0, i3 = 0, i5 = 0;

    nextMultipleOf2 = uglyNumbers[i2] * 2;
    nextMultipleOf3 = uglyNumbers[i3] * 3;
    nextMultipleOf5 = uglyNumbers[i5] * 5;


    for (let i = 1; i < lastNumber; i++) {
        let nextUglyNumber = Math.min(Math.min(nextMultipleOf2, nextMultipleOf3), nextMultipleOf5);
        uglyNumbers[i] = nextUglyNumber;
        
        if(nextUglyNumber == nextMultipleOf2){
            i2++;
            nextMultipleOf2 = uglyNumbers[i2] * 2;
        }
        if(nextUglyNumber == nextMultipleOf3){
            i3++;
            nextMultipleOf3 = uglyNumbers[i3] * 3;
        }
        if(nextUglyNumber == nextMultipleOf5){
            i5++;
            nextMultipleOf5 = uglyNumbers[i5] * 5;
        }
    }

    console.log("array", JSON.stringify(uglyNumbers, null, 2));
    // console.log("\n\n\narray length", uglyNumbers.length);
}

printUglyNumbers(150);