const findPrime = function (...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let flag = 0;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        flag++;
        break;
      }
    }
    if (flag != 0 || numbers[i] == 1)
      console.log(numbers[i] + " " + "is not prime number");
    else console.log(numbers[i] + " " + "is prime number");
  }
};

findPrime(5, 10, 15, 20, 13, 17, 21);
findPrime(2, 4, 6, 1);
