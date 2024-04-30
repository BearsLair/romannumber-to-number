// decimal variable set to 0
// string to array
// iterate through array, adding RN value to integer
// IF Roman

function solution(roman) {
  let decimal = 0;
  const decimalArray = roman.split("");
  decimalArray.map((letter) => values(letter));
  return decimal;
}

function values(letter) {
  switch (letter) {
    case "I":
      decimal += 1;
      break;
    case "V":
      decimal += 5;
      break;
    case "X":
      decimal += 10;
      break;
    case "L":
      decimal += 50;
      break;
    case "C":
      decimal += 100;
      break;
    case "D":
      decimal += 500;
      break;
    case "M":
      decimal += 1000;
      break;
  }
}

//Test cases
console.log(solution("XXI")); // 21
console.log(solution("I")); // 1
console.log(solution("IV")); // 4
console.log(solution("MMVIII")); // 2008
console.log(solution("MDCLXVI")); // 1666
