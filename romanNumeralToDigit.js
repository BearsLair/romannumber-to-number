// decimal variable set to 0
// string to array
// iterate through array, adding RN value to integer
// IF Roman

function solution(roman) {
  // let decimal = 0;
  const decimalArray = roman.split("");
  return decimalArray;
}

//Test cases
console.log(solution("XXI")); // 21
console.log(solution("I")); // 1
console.log(solution("IV")); // 4
console.log(solution("MMVIII")); // 2008
console.log(solution("MDCLXVI")); // 1666
