//1
function triangle(height) {
  let counter = 1;
  for (let i = 1; i <= height; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += `0${counter} `;
      counter = counter + 1;
    }
    console.log(result);
  }
}

triangle(5);

// 2

function fizzBuzz(total) {
  let result = [];

  for (let i = 1; i <= total; i++) {
    if (i % 15 === 0 && i >= 15) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0 && i >= 3) {
      result.push("Fizz");
    } else if (i % 5 === 0 && i >= 5) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

console.log(fizzBuzz(15));

// 3

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  let result = "";

  if (bmi < 18.5) {
    result = "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    result = "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    result = "very overweight";
  } else {
    result = "obesity";
  }

  return `Your BMI = ${bmi} and you are ${result}`;
}

console.log(bmi(78, 1.75));

// 4.

function evenNum(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5

function stringToArr(string) {
  return string.split(" ");
}

console.log(stringToArr("Hello World"));
