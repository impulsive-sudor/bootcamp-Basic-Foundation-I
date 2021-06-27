// Please work on the following challenges and upload your work in a single file.

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function smallarray(smallnum) {
    var array = [];
    for (var x=1; x <= smallnum; x++){
        array.push(x)
    }
    return array;
}

var answer = smallarray(255);
console.log(answer)
// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function oneksum(x) {
    let t = x / 2;
    let z = t % 2;
    let f = 1 + t;
    let p = t * f;

    return p
}

var answer2 = oneksum(1000)
console.log(answer2)

// or a less efficient method below

function oneksumv2(t) {
    var z = 0;
    for (var x=2; x <= t; x = x+2){
        z = x + z;
    }
    return z;
}

var answer2ish = oneksumv2(1000)
console.log(answer2ish)

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function fiveksum(x) {
    let t = x / 2;
    let z = t % 2;
    let f = 1 + t;
    let p = t * f;

    return Math.round(p);
}

var answer3 = fiveksum(5000)
console.log(answer3)

// or a less efficient method below

function fiveksumv2(t) {
    var z = 1;
    for (var x=2; x <= t; x = x+2){
        z = x + z;
    }
    return z;
}

var answer3ish = oneksumv2(5000)
console.log(answer3ish)

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function arraysum(w) {
    var z = 0;
    for (var x=0; x < w.length; x++){
        z = w[x] + z;
    }
    return z;
}

var answer4 = arraysum([5,2,3])
console.log(answer4)


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function arraymax(maxi) {
    maxi.sort(function(a, b){return b-a});

    return maxi;
}

var answer5 = arraymax([3,12,6])
console.log(answer5[0])


// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function arraysum(w) {
    var z = 0;
    for (var x=0; x < w.length; x++){
        z = w[x] + z;
    }
    return (z / w.length);
}

var answer6 = arraysum([1,3,5,7,20])
console.log(answer6)

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddarry(oddar){
    var z = [];
    for (var x=1; x <= oddar; x++){
        z.push(x);
    }
    return z;
}

var answer7 = oddarry(50)
console.log(answer7)

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterthany(array){
    var Y = 3
    newarray = []
    for (var x=0; x < array.length; x++){
        if (array[x] > Y) {
            newarray.push([array[x]])
        }

    }
    return newarray;
}

var answer8ish = greaterthany([1, 3, 5, 7])
console.log("Greater than Y:" + answer8ish)


// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

var thisarr = [1, 5, 10, -2];
thisarr.forEach(sqauremulti)

function sqauremulti(item, index, array) {
    array[index] = item * item;
}

console.log(thisarr)


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

var thisarrneg = [1, 5, 10, -2];
thisarrneg.forEach(negativearr)

function negativearr(item, index, array) {
    var x = Math.sign(item)
    if (x < 1) {
        array[index] = 0;
    }
}

console.log(thisarrneg)

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function theonearray(array){
    var min = array[0]
    var max = array[0]
    var z = 0
    var newarray = []
    for (var x=0; x < array.length; x++){
        if (array[x] < min) {
            min = array[x]
        } 
        if (array[x] > max) {
            max = array[x]
        }
        z = array[x] + z;
        var avg = (z / array.length)
    }

    newarray.push(max,min,avg);
    return newarray;
}

var answerminmax = theonearray([1,5,10,-2])
console.log(answerminmax)


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapers(swap){
    var swaplength = swap.length - 1;
    var lastnumber = swap[swaplength];
    var firstnumber = swap[0];

    swap[swaplength] = firstnumber;
    swap[0] = lastnumber;

    return swap
}

var answer12 = swapers([1,5,10,-2])
console.log(answer12)


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

var thisarrdojo = [-1, -3, 2];
thisarrdojo.forEach(dojo)

function dojo(item, index, array) {
    var x = Math.sign(item)
    if (x < 1) {
        array[index] = 'Dojo';
    }
}

console.log(thisarrdojo)
