function solution(roman) {
  let decimal = 0;
  let decimalArray = [];
  const romanArray = roman.split("");

  romanArray.map((letter) => {
    switch (letter) {
      case "I":
        decimalArray.push(1);
        break;
      case "V":
        decimalArray.push(5);
        break;
      case "X":
        decimalArray.push(10);
        break;
      case "L":
        decimalArray.push(50);
        break;
      case "C":
        decimalArray.push(100);
        break;
      case "D":
        decimalArray.push(500);
        break;
      case "M":
        decimalArray.push(1000);
        break;
    }
  });

  for (let i = 0; i < decimalArray.length; i++) {
    if (decimalArray.length === 1) {
      decimal += decimalArray[i];
      break;
    } else if (decimalArray.length > 1 && i === 0) {
      decimal += decimalArray[0];
    } else if (decimalArray[i - 1] < decimalArray[i]) {
      decimal += decimalArray[i] - decimalArray[i - 1] * 2;
    } else {
      decimal += decimalArray[i];
    }
  }

  return decimal;
}
