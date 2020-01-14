# validate-luhn-mod-n

![GitHub](https://img.shields.io/github/license/alfredmyers/validate-luhn-mod-n.svg?style=flat) [![Build Status](https://travis-ci.org/alfredmyers/validate-luhn-mod-n.svg?branch=master)](https://travis-ci.org/alfredmyers/validate-luhn-mod-n)

Validates Luhn Mod N check values

Code based on <https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm>
with minimal modifications.

## Installing

```sh
npm install validate-luhn-mod-n
```

## API

### Parameters

Parameter | Description
--- | ---
codePointFromCharacter | Function to obtain a code point from a character
n | Number of valid characters
input | Input string

## Using

The following example is based on the one found at <https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm>

```javascript
const map = 'abcdef';  // Character to code-point map
const validateLuhnModN = require('validate-luhn-mod-n');

const valid = validateLuhnModN(character => map.indexOf(character), map.length, 'abcdefe'))

// valid === true 
```

The following example uses JavaScript's native function parseInt to do the mapping based on radix/mod 36.

```javascript
const validateLuhnModN = require('validate-luhn-mod-n');
const radix = 36
const valid = validateLuhnModN(character => Number.parseInt(character, radix), radix, '1134806PJFB000010013CD18D');

// valid === true 
```

The following example builds upon the previous one and demonstrates a possible way to do validation against an arbitrary regular expression before calculating the check character.

```javascript
const validateLuhnModN = require('validate-luhn-mod-n');
const radix = 36;
const pattern = /^([A-Z]|\d){4}\d{3}([A-Z]|\d){15}\d{2}([A-Z]|\d)$/;

if (!pattern.test(input)) {
  throw new Error('Invalid identifier format!');
}

const valid = validateLuhnModN(character => Number.parseInt(character, radix), radix, '1134806PJFB000010013CD18D');

// valid === true
```
