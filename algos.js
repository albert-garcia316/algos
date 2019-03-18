//12-21-2018
//write a function that determines if someone has won a game of Tic Tac Toe
[[x,x,x],
[o,x,o],
[o,o,x]]
function ticTacWin(game){
    for(var i = 0; i < game.length; i++){
        for(var j = 0; j < game[i].length; j++){
            if(game[i][j] == game[i][j+1] && game[i][j] == game[i][j+2] && j == 0) {
                return "not a cat"
            }
            else if (game[i][j] == game[i+1][j] && game[i][j] == game[i+2][j] && i == 0){
                return "not a cat"
            }
            else if (game[i][j] == game[i+1][j+1] && game[i][j] == game[i+2][j+2] && i == 0 && j == 0){
                return "not a cat"
            }
            else if (game[i+2][j] == game[i+1][j+1] && game[i+2][j] == game[i+2][j] && i == 0 && j == 0){
                return "not a cat"
            };
        };
    };
    return "game is a cat"
};


//1-9-2019
//Find the smallest diff between two arrays and return the smallest diff.
function smallestDiff(arr1, arr2) {
    var dif = arr1[0] - arr2[0];
    if (dif < 0) {
        dif *= -1;
    };
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            var temp = arr1[i] - arr2[j];
            if (temp < 0){
                temp *= -1;
            }
            if (temp < dif){
                dif = temp;
            }
        }
    }
    return dif;
}

//1-18-2018
// given a list people (birth and death) find the year with the most people alive
// [{name: Albert, birth: , death:}, ]
function livingPeople(arr){
    var count = 0;
    var year = null;
    var first_birth = 2000;
    var last_death = 1900;
    for (var x = 0; x < arr.length; x++) {
        if(arr[x].birth < first_birth){
            first_birth = arr[x].birth;
        }
        if(arr[x].death > last_death){
            last_death = arr[x].death;
        }
    }
    for (var i = 1900; i <= 2000; i++){
        var temp = 0;
        for(var j = 0; j < arr.length; j++){
            if(arr[j].birth <= i && arr[j].death >= i){
                temp ++;
            }
            if(temp > count){
                count = temp;
                year = i;
            }
        }
    }
    return year;
}
// 1/21/2019
// Pairs with Sum
function pairsSum(arr, sum){
    var output = [];
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i +1; j < arr.length; j++){
            if(arr[i] + arr[j] == sum){
                output.push([arr[i], arr[j]]);
            }
        }
    }
    return output;
}

// 1/23/2019 (Austin)
// letters and numbers: find longest set of equal letters and numbers in a given array
// ******* Not finished yet ***********
function lettersNumbers(arr){
    var temp_arr = [];
    var output = [];
    for (var i = 0; i < arr.length-1; i++){
        var letter_count = 0;
        var num_count = 0;
        if (typeof arr[i] == String){
            letter_count++;
        }
        else{
            num_count++;
        }
        temp_arr.push(arr[i]);
        for (var j = i + 1; j < arr.length; j++){
            if (typeof arr[j] == string){
                letter_count += 1;
            }
            else{
                num_count += 1;
            }
            temp_arr.push(arr[j]);
        }
    }
}

// 1/25/2019
// find the majority element in an arr if it exists, using 0(N)
function majorityElement(arr){
    var dict = { "output":[arr[0], 1]};
    dict[[arr[0]]] = 1;
    for (var i = 1; i < arr.length; i++){
        if(arr[i] in dict){
            dict[arr[i]] += 1;
        }
        else{
            dict[arr[i]] = 1;
        }
        if(dict[arr[i]] > dict.output[1]){
            dict.output = [arr[i], dict[arr[i]]];
        }
    }
    if(dict.output[1] > arr.length/2){
        return dict.output[0];
    }
    else{
        return -1;
    }
}
majorityElement([1,2,5,9,5,9,5,5,5]);

// 1/27/2019
// (Solon) Longest Word: Given a list of words, write a program to find 
// the longest word made of other words in the list.
// Hints: #475, #499, #543, #589 ... Answer 572
function longestWord(arr){
    
}

// 2/06/2019
// Circus Tower: A circus is designing a tower routine consisting of people standing atop one anoth­ er's shoulders. For practical and aesthetic reasons,each person must be both shorter and lighter than the person below him or her. Given the heights and weights of each person in the circus,write a method to compute the largest possible number of people in such a tower.
// EXAMPLE
// lnput(ht,wt): (65, 100) (70, 150) (56, 90) (75, 190) (60, 95) (68, 110) Output: The longest tower is length 6 and includes from top to bottom:
// (56, 90) (60,95) (65,100) (68,110) (70,150) (75,190)
// Hints:#638, #657, #666, #682, #699
function circusTower(arr){
    var output = [];
    var i = 1;
    var lightest = arr[0];
    var ph = 0;
    while (arr.length > 1){
        if(arr[i][0] < lightest[0] && arr[i][1] < lightest[1]){
            lightest = arr[i];
            ph = i;
        }
        if(i == arr.length - 1){
            if(output.length < 1){
                output.push(arr[ph]);
                arr.splice(ph, 1);
                i = 0;
                ph = 0;
                lightest = arr[0];
            }
            else if(lightest[0] > output[output.length - 1][0] && lightest[1] > output[output.length - 1][1]){
                output.push(arr[ph]);
                arr.splice(ph, 1);
                i = 0;
                ph = 0;
                lightest = arr[0];
            }
            else {
                arr.splice(ph, 1);
                i = 0;
                ph = 0;
                lightest = arr[0];
            }
        }
        i++;
    }
    if(arr[0][0] > output[output.length - 1][0] && arr[0][1] > output[output.length - 1][1]){
        output.push(arr[0]);
    }
    return output;
}
// [[65, 100], [70, 150], [56, 90], [75, 190], [60, 95], [68, 110]]

// 2/13/2019
// given an arr and k, determine if any two numbers in the arr add up to k
function  sumK(arr, k) {
    var dict = {[arr[0]]: arr[0]};
    for( var i = 1; i < arr.length; i++){
        dict[arr[i]] = arr[i];
        var temp = k - arr[i];
        if (temp in dict){
            return true;
        }
    }
    return false;
}
console.log(sumK([10,15,3,7], 17));

// given an arr, create a new arr where the value equals the product of
// all values of arr except for the index of the given arr.
function multiply(arr){
    var output =[];
    for (var i = 0; i < arr.length; i++){
        var mult = 1;
        for (var j = 0; j < arr.length; j++){
            if(j != i){
                mult *= j;
            }
        }
        output.push(mult);
    }
    return output;
}
console.log(multiply([1,2,3,4,5]))

// 2/20/2019
// find the lowest positive int missing from a given arr
// done in linear time. The arr can have negatives and duplicates
function lowestMissingNo(arr){
    var dict = {};
    for (var i = 0; i < arr.length; i++){
        dict[arr[i]] = arr[i];
    }
    var t = 1;
    while(t in dict){
        t++;
    }
    return t;
}
console.log(lowestMissingNo([3,4,-1,1])) // return 2
console.log(lowestMissingNo([2,1,0])) // return 3

// 2/22/2019
// find greatest sum from a given arr without using successive numbers


// 2/25/2019
// Given an array of intergers 1-26, return all the possible decoded messages:
// where a = 1 and z = 26
// try to do this in one pass

function codeBreaker(arr){
    var dict = {1: "a", 2 : "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 9: "i", 10: "j", 11: "k", 12: "l", 13: "m", 14: "n", 15: "o", 16: "p", 17: "q", 18:  "r", 19: "s", 20: "t", 21: "u", 22: "v", 23: "w", 24: "x", 25: "y" , 26: "z"};
    var output = [];
    var count = 0;
    for(var i = 0; i <arr.length - 1; i++){
        if(arr[i] === 0){
            continue;
        }
        if(arr[i] == 1 || arr[i] == 2){
            count ++;
            console.log(output.length);
            if(output.length === 0){
                output.push(dict[arr[i]]);
                console.log(output, "current output");
            } 
            else{
                  output[output.length - count] += dict[arr[i]];
            }
        }
        // else{
        //     if(output.length === 0){
        //         output.push(dict[arr[i]]);
        //     } 
        //     else {
        //         output[output.length - count] += dict[arr[i]];
        //     }
        // }
    }
    output[output.length - count] += dict[arr[arr.length - 1]];
    return output;
}
console.log(codeBreaker([1,1,1]));



function round(num){
    var ones = 0;
    var tenths = 0;
    num *= 100;
    console.log(num);
    while(num > 100){
      num -= 100;
      ones += 100;
    }
    console.log(num, "after removing dollars");
    while(num > 10){
      num -= 10;
      tenths += 10;
    }
    console.log(num, "after removing tenths")
    console.log("ones =", ones, "tenths =", tenths);
    if(num > 5){
      num = 10;
    }
    else{
      num = 5;
    }
    num = num + ones + tenths;
    num /= 100;
    console.log(num);
  
  
  }
  round(1.499)

// str Combo
// find all the combinations of letters of a given string
function strCombo(str){
    arr = [];
    for(var i = 0; i <str.length; i++){
        var temp_arr = str.split("");
        console.log(temp_arr);
        var temp_str = "";
        var j = i + 1;
        // while(j != i){
        //     if(j > str.length - 1){
        //         j = 0;
        //     }
        //     temp_str += temp_arr[j];
        // }
        // temp_str += temp_arr[i];
        // arr.push(temp_str);
        // console.log(arr);
    }
}
strCombo("abc");

// 3/8/2019 
// using recursion given a number find the factorial of that number:
// example give 4 return 24
function FirstFactorial(num) { 
    if(num == 1){
        return 1;
    }
    else {
        return num * FirstFactorial(num - 1);
    }
}
FirstFactorial(6);  

// 3/11/2019
// Validate function
// given a string of symbols ()[]{} check if it is in a valid format
// as in no close before opening, and there is a close for every open
function isValid(str){
    var dict = {
        "(" : 0,
        ")" : 0,
        "[" : 0,
        "]" : 0,
        "curlyO" : 0,
        "curlyC" : 0,
        "opens" : 0,
        "closes" : 0 
    }
    for(var i = 0; i < str.length; i++){
        if(str[i] == "{"){
            dict.curlyO += 1;
        }
        if(str[i] == "}"){
            dict.curlyC += 1;
        }
        else {
            dict[str[i]] += 1;
        }
        if(dict[")"] > dict["("] || dict["]"] > dict["["] || dict.curlyC > dict.curlyO){
            return false;
        }
        if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
            dict.opens += 1;
        }
        if(str[i] == ")" || str[i] == "]" || str[i] == "}"){
            dict.closes += 1;
        }
        if((dict.opens - dict.closes) > (str.length - (i + 1))){
            return false;
        }
    }
    return true;
}
isValid("()[]{}")

function simpleAdding(num){
    var i = 1;
    var sum = 0;
    while(i <= num){
        sum += i;
        i++;
    }
    return sum;
}
console.log(simpleAdding(4));

// 3/13/2019
// Have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). Your program should determine if all of the queens are placed in such a way where none of them are attacking each other. If this is true for the given input, return the string true otherwise return the first queen in the list that is attacking another piece in the same format it was provided. 

// For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true. The corresponding chessboard of queens for this input is below (taken from Wikipedia). 
function eightQueens(arr){
    var dict = {};
    for(var i = 0; i < arr.length; i++){
        dict[arr[i]] = arr[i];
    }
    for(var i = 0; i < arr.length - 1; i++){
        var x = arr[i][1];
        var y = arr[i][3];
        for(var j = i+1; j< arr.length; j++){
            if(arr[j][1] == x || arr[j][3] == y){
                return arr[i];
            }
        }
        x = parseInt(x);
        y = parseInt(y);
        // both increment
        while(x <= 8 && y <= 8){
            x++;
            y++;
            var temp = "(" + x + "," + y + ")";
            if(temp in dict){
                return arr[i];
            } 
        }
        x = parseInt(arr[i][1]);
        y = parseInt(arr[i][3]);
        // both dec
        while(x >= 1 && y >= 1){
            x--;
            y--;
            var temp = "(" + x + "," + y + ")";
            if(temp in dict){
                return arr[i];
            } 
        }
        x = parseInt(arr[i][1]);
        y = parseInt(arr[i][3]);
        // x inc and y dec
        while(x <= 8 && y >= 1){
            x++;
            y--;
            var temp = "(" + x + "," + y + ")";
            if(temp in dict){
                return arr[i];
            } 
        }
        x = parseInt(arr[i][1]);
        y = parseInt(arr[i][3]);
        // x dec and y inc
        while(x >= 1 && y <= 8){
            x--;
            y++;
            var temp = "(" + x + "," + y + ")";
            if(temp in dict){
                return arr[i];
            } 
        }
    }
    return "true";
}
console.log(eightQueens(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"]));

// test test