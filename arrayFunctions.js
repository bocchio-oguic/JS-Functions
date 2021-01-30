// Returns the sum of an array
function simpleArraySum(ar) {
    var sum = 0;
    var i;
    for (i of ar) { sum += i; }
    return sum;
}

-----------------------------

// Calculation of absolute difference between the sum of diagonals inside a matrix
function diagonalDifference(arr) {
    
    // Variable of Absolute Difference
    var abs_dif = 0;

    // Sum of diagonals
    var sum_left_diag = 0;
    var sum_right_diag = 0;

    // Number of Intergers by Diagonal of Matrix
    var size = arr[0].length;

    // Variables for Loops
    var i; var j;

    // Loop For Left Diagonal
    for (i = 0; i < size; i++) { sum_left_diag += arr[i][i]; }

    // Loop For Right Diagonal
    for (i = (size-1), j = 0; i >= 0; i--, j++) { sum_right_diag += arr[i][j]; }

    // Absolute Difference
    abs_dif = Math.abs(sum_left_diag - sum_right_diag);

    // Return Result
    return abs_dif;

}

------------------------------

// This function gives the result ratios of numbers in an array, separating [Ratio of Positives, Ratio of Negatives, Ratio of Zeros]

/* For example: array=[5, -4, -32, 25, 0, -1, 0, 45, 19]    -> 0.444444 Positives / 0.333333 Negatives / 0.222222 Zeros */

function plusMinus(arr) {
    
    // Initialize Result Array for Ratios
    var countRatios = [0,0,0];

    // For Loop that increments count of [Pos / Neg / Zer]
    var i;
    for (i of arr) { if (i > 0){countRatios[0]++;} else if (i < 0) {countRatios[1]++;} else {countRatios[2]++;}}

    // Transform Sum to Ratios
    var len = arr.length;
    for (var j=0; j<=2; j++) {
    	countRatios[j] /= len;
    	countRatios[j] = Math.round(countRatios[j] * 1000000) / 1000000;
    }

    // Normal Output
    document.write(countRatios[0] + "<br \>" + countRatios[1] + "<br \>" + countRatios[2]);

    //NodeJS Output
    //process.stdout.write(countRatios[0] + '\n' + countRatios[1] + '\n' + countRatios[2]);
}

// Initialize a Testing Array
var array=[5, -4, -32, 25, 0, -1, 0, 45, 19];

plusMinus(array);

