# searchAllKeys

NPM to search the given input (Array of objects) in all the keys


## Installation

```js
# using npm
npm install searchallkeys
```

## Usage

```js
# using require
const { searchallkeys } = require('searchallkeys');

# using import
import { searchallkeys } from 'searchallkeys';
```

## Example

searchallkeys(inputArray, valueTosSearch, fieldsArrayToLookFor)

```js
searchallkeys(
  [
    { apple: 5, banana: 10, mango: 15 },
    { apple: 1, banana: 5, mango: 3 },
    { apple: 100, banana: 100, mango: 5 },
  ],
  5,
  ["apple", "mango"]
);
```
