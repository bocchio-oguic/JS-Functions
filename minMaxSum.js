"use strict"

// This function splits an Input String into an array, makes an ascending sort of it and returns the min and max sums for any 4/5 values into the array

// For example: String "1 40 60 5 81"    -> Min 106 Max 186



function minMaxSum(str) {
    
	// Split the Input String into different String values in an array
	var arr = str.split(" ");

	// Convert all the String values in the array into Integer values
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i] = Number(arr[i]);
	}

	// Sort the Integer values in the array in Ascending way
	arr.sort(function(a, b){return a-b});

	// Calculate Min of sorted array
	var min = 0;
	for (var i = arr.length - 2; i >= 0; i--) { min += arr[i]; }

	// Calculate Max of sorted array
	var max = 0;
	for (var i = arr.length - 1; i >= 1; i--) { max += arr[i]; }


    console.log(arr);
	console.log("Min: " + min);
	console.log("Max: " + max);


    // NodeJS Output
	// process.stdout.write(min + " " + max);
}


minMaxSum("1 40 60 5 81");
