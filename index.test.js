'use strict';

const validateLuhnModN = require('./index');

const radix = 36;
const validateLuhnMod36 = validateLuhnModN.bind(undefined, character => Number.parseInt(character, radix), radix);
const input = 0;
const expected = 1;
const testData = [
  ['1134806PJFB000010013CD18D'],
  ['1144701CEAA0000000004218S'],
  ['1144701AU1087AE065175318P'],
  ['111252331000000008229719H']
];

testData.forEach(item => {
  test('Luhn Mod 36', () => {
    expect(validateLuhnMod36(item[input]))
      .toBe(true);
  });
});


//test based on algorithm description in https://en.wikipedia.org/wiki/Luhn_algorithm
test('Luhn example from Wikipedia', () => {
  expect(validateLuhnModN(Number.parseInt, 10, '79927398713'))
    .toBe(true);
});

//test based on algorithm example in https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm
const map = 'abcdef';
test('Luhn Mod N example from Wikipedia', () => {
  expect(validateLuhnModN(character => map.indexOf(character), map.length, 'abcdefe'))
    .toBe(true);
});
