
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
