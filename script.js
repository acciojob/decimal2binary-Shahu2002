
	function decimalToBinary(decimalNumber) {
  // Check if the input is not a valid number
  if (isNaN(decimalNumber) || decimalNumber < 0) {
    return "Invalid input. Please enter a non-negative decimal number.";
  }

  // Handle the special case of 0 separately
  if (decimalNumber === 0) {
    return "0";
  }

  let binaryResult = "";

  while (decimalNumber > 0) {
    // Get the remainder when dividing by 2 (0 or 1)
    const remainder = decimalNumber % 2;

    // Add the remainder to the binary result (prepend it)
    binaryResult = remainder + binaryResult;

    // Update the decimal number by integer division (floor division) by 2
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binaryResult;
}


window.decimalToBinary = decimalToBinary;
