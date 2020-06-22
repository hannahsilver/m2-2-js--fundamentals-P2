// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
  let sum = 0;
  grades.forEach((number) => {
    sum += number;
  });
  let average = sum / grades.length;
  return Math.round(average);
}

function letterGrade(grade) {
  let letterGrade = "A";

  if (grade < 90) letter = "B";
  if (grade < 80) letter = "C";
  if (grade < 70) letter = "D";
  if (grade < 60) letter = "F";

  return letter;
}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));

console.log(letterGrade(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65])));

// Try with other values as well
console.log(letterGrade(calculateAverage([13, 12, 14, 12, 15])));
