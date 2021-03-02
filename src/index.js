module.exports = function toReadable (number) {
    let zero = "zero";
	let units = ["one","two","three","four","five","six","seven","eight","nine"];
	let teen = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	let ty = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
	
	// for zero
	if (number === 0) {
		return zero;
	}
	// from 100 to 1000 
	if (number > 99) {
		return units[Math.floor(number / 100 - 1)] + " hundred" + " " + numsToWords(number - (Math.floor(number / 100)) * 100);
	} else return numsToWords(number - (Math.floor(number / 100)) * 100);

	// from 1 to 19 and for all ty nums
	function numsToWords() {
		if (number <= 9) {
			return units[number - 1];
		} else if (number <= 19) {
			return teen[number - 10];
		} else {
			return ty[Math.floor(number / 10) - 2] + " " + units[number % 10 - 1];
		}
	}
}
