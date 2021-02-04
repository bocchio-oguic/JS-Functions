"use strict"

// This function converts a variable with AM/PM format, to a 24hs format 

// For example: String "10:00:01PM"    -> "22:00:01"



function timeConversion(time) {
    
	// Split the Input String into [hh,mm,ss,T]
	var arrayTime = time.split(":");
	
	// Extracts the AM/PM feature
	var ampm = arrayTime[2].substr(2,2);
	arrayTime[2] = arrayTime[2].substr(0,2);

	switch (ampm){
		case "AM":
			// In case 'AM' only change 12 for 00
			if(arrayTime[0] == "12"){
				arrayTime[0] = "00";
			}
			break;
		case "PM":
			// In case 'PM' 12 stays equal, and others adds 12
			if(arrayTime[0] != "12"){
				arrayTime[0] = String(parseInt(arrayTime[0]) + 12);
			}
			break;
		}

	var result = String(arrayTime[0] + ':' + arrayTime[1] + ':' + arrayTime[2]);
	// console.log(result);


    // NodeJS Output
	//process.stdout.write(result);

	return(result);
}


timeConversion("01:01:02PM");
