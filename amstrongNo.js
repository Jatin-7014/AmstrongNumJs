function IsAmstrong() {
  let p = document.getElementById("result");
  let sum = 0;
  const number = amstrong.m1.value;

  // create a temporary variable
  let temp = number;
  while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); 
  }
  // check the condition
  if (sum == number) {
    p.innerHTML=`${number} is an Armstrong number`;
  } else {
    p.innerHTML=`${number} is not an Armstrong number.`;
  }
}
