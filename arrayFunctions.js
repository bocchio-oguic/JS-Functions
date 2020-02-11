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


