module.exports = function toReadable (number) {
    let zero = "zero";
	let units = ["one","two","three","four","five","six","seven","eight","nine"];
	let teen = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	let ty = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
	
	// for zero
	if (number === 0) {
		return zero;
	}
    
    // from 1 to 19 and for all ty nums

	if (number <= 9) {
		return units[number - 1];
	} else if (number <= 19) {
		return teen[number - 10];
	} else {
		return ty[Math.floor(number / 10) - 2] + " " + units[number % 10 - 1];
	}
}
