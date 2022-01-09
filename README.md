# pretty-numbers

pretty-numbers is a simple module written in TypeScript that aims to make (especially larger) numbers look better. The inspiration for this project is how Twitter specifically formats numbers larger than 9,999 in Tweet interactions (i.e. 10,153 becomes 10.1K).

## Install

```
npm install --save pretty-numbers
```

## Usage

```js
/* ES6 */
import { prettyNumber } from "pretty-numbers";

// No options specified
const nice_number = prettyNumber(136415);
console.log(nice_number);
// Outputs "136,415" to console.

// abbreviate_suffix option specified
const nicer_number = prettyNumber(136415, { abbreviate_suffix: true });
console.log(nicer_number);
// Outputs "136.4K" to console.

// abbreviate_suffix and decimal_places option specified
const nicer_longer_number = prettyNumber(136415, {
	abbreviate_suffix: true,
	decimal_places: 3,
});
console.log(nicer_longer_number);
// Outputs "136.415K" to console.
```

Calling `prettyNumber` with only a `number` results in the returned `string` to only be "comma-ified" -- that is, the number, if large enough, has just been formatted as a string to have commas in the correct place(s).

There is a second way to format strings that are NOT "comma-ified", but rather "pretty-ified". "Pretty-ified" means, for example, `1455696` becomes `"1.4M"`, or `"1.456M"`. To do this, an additional argument must be supplied. This argument is a JSON object, that has up to two members, they are described more in the Options section.

### Options

- `abbreviate_suffix` -- If `true`, instead of commas being applied to a number, the number instead abbreviated.
  - This function currently only supports going up to Trillions (`T`), mainly because I am unsure of what comes after that... feel free to make a PR to add more suffixes
  - Numbers below 1,000 are not formatted in any special way.
- `decimal_places` -- Only used if `abbreviate_suffix` is `true`. Specifies how many decimal places to round to when formatting a large number with an abbreviated suffix.
