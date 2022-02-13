module.exports = function toReadable (number) {
  let zero = "zero";
  let units = ["one","two","three","four","five","six","seven","eight","nine"];
  let teen = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let ty = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  // for zero
  if (number === 0) {
  	return zero;
  }
  // for hundreds 
  if (number % 100 == 0) {
  	return `${units[Math.floor(number / 100 - 1)]} hundred`;
  } else if (number > 99 && number < 1000) {
  	return `${units[Math.floor(number / 100 - 1)]} hundred ${numsToWords(number - (Math.floor(number / 100)) * 100)}`;
  } else {
  	return numsToWords(number - (Math.floor(number / 100)) * 100);
  }
  // from 1 to 19 and for all ty nums
  function numsToWords(number) {
  	if (number <= 9) {
  		return units[number - 1];
  	} else if (number <= 19) {
  		return teen[number - 10];
  	} else if (number % 10 == 0) {
  		return  `${ty[Math.floor(number / 10) - 2]}`;
  	} else {
  		return `${ty[Math.floor(number / 10) - 2]} ${units[number % 10 - 1]}`
  	}
  }
}
