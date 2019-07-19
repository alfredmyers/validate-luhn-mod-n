'use strict';

module.exports = function validateLuhnModN(codePointFromCharacter, n, input) {
  var factor = 1;
  var sum = 0;

  // Starting from the right, work leftwards
  // Now, the initial "factor" will always be "1" 
  // since the last character is the check character
  for (var i = input.length - 1; i >= 0; i--) {
    var codePoint = codePointFromCharacter(input[i]);
    var addend = factor * codePoint;

    // Alternate the "factor" that each "codePoint" is multiplied by
    factor = (factor == 2) ? 1 : 2;

    // Sum the digits of the "addend" as expressed in base "n"
    addend = Math.floor(addend / n) + (addend % n);
    sum += addend;
  }

  var remainder = sum % n;

  return (remainder == 0);
}
