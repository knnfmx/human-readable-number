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

	if (num <= 9) {
		return units[num - 1];
	} else if (num <= 19) {
		return teen[num - 10];
	} else {
		return ty[Math.floor(num / 10) - 2];
	}
}
