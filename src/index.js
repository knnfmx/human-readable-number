module.exports = function toReadable (number) {
    let zero = "zero";
	let units = ["one","two","three","four","five","six","seven","eight","nine"];
	let teen = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	let ty = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
	
	// for zero
	if (number === 0) {
		return zero;
	}
}
