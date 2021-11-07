for (let number = 1; number < 1000; number++) {
  let flag = 0;
  for (let j = 2; j < number; j++) {
    if (number % j == 0) {
      flag++;
      break;
    }
  }
  if (flag == 0 && number != 1) console.log(number);
}

//Find Prime Numbers