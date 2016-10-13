function calcGrades(numGrades) {
	// Initialize local variables
	var n = numGrades.length;
	var range = Math.floor(n / 5);
	var aScores, bScores, cScores, dScores, fScores;

	// Sort the input list
	numGrades.sort();

	// Store number grades in arrays for each letter grade
	aScores = numGrades.slice(n - range * 1, n);
	bScores = numGrades.slice(n - range * 2, n - range * 1);
	cScores = numGrades.slice(n - range * 3, n - range * 2);
	dScores = numGrades.slice(n - range * 4, n - range * 3);
	fScores = numGrades.slice(0, n - range * 4);

	// Store all the score arrays in a common array
	var sortedGrades = [aScores,bScores,cScores,dScores,fScores];

	// Check for duplicates of number grades in each letter grade
	// If there are duplicates, move them to the higher letter grade
	for (var i = 4; i > 0; i--) {
		var index = sortedGrades[i].length-1;
		while (sortedGrades[i].length > 0 && sortedGrades[i-1][0] === sortedGrades[i][index]) {
			// Remove the duplicate score from the lower letter grade
			// and prepend it to the higher letter grade
			sortedGrades[i-1].unshift(sortedGrades[i].pop());
			index--;
		}
	}

	// Return an array containing the score arrays
	return sortedGrades;
}



// Main Method
var grades = [99, 92, 91, 91, 89, 85, 83, 82, 80, 79, 78, 78, 77, 76, 75, 74, 62, 55, 43, 20];
var sortedGrades = calcGrades(grades);
var letters = ['A','B','C','D','F'];

console.log("Grades:");
for (var i = 0; i < sortedGrades.length; i++) {
	for (var j = sortedGrades[i].length - 1; j >= 0; j--) {
		console.log(sortedGrades[i][j] + ": " + letters[i]);
	}
}