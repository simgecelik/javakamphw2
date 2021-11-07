const findAmicableNumbers = function (...numbers) {
  let sums = [];
  for (let i = 0; i < 2; i++) {
    let sum = 0;
    for (j = 1; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        sum += j;
      }
    }
    sums.push(sum);
  }
  if (sums[0] == numbers[1] && sums[1] == numbers[0]) {
    console.log("Numbers are amicable");
  } else console.log("Numbers are not amicable");
};
findAmicableNumbers(284, 220);
