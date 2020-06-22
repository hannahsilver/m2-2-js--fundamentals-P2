// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function max(num1, num2) {
  //console.log("inside max: ", num1, " and ", num2);
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

// let biggernumber = max(12, 43);
// console.log(biggernumber);

//console.log(max(13, 5) + ` is the greater number.`);

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

let biggerNumberOfFour = max(max(12, 43), max(42, 99));
console.log(biggerNumberOfFour);

// let greaterNumber = max(max(num1, num2), max(num3, num4));
// console.log(`${greaterNumber} is the greater number.`);

// Q3.3
// Would this work with more integers?
//yes;
