// Returns the sum of an array
function simpleArraySum(ar) {
    var sum = 0;
    var i;
    for (i of ar) { sum += i; }
    return sum;
}

--------------------------------------

// Compare 2 arrays[3] and returns the result of bigger by index [2,1]
function compareTriplets(a, b) {

    // Create array
    var comparision = [0,0];

    // Loop for comparision
    for (var i=0; i<3; i++){
        if (a[i]>b[i]) {comparision[0]++;}
        else if (a[i]<b[i]) {comparision[1]++;}
    }

    // Return values
    return comparision;

}

--------------------------------------

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

