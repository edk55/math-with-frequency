# Math with frequency

Math functions to use with frequency table.

## Installation

Install `math-with-frequency` using [npm](https://www.npmjs.com/package/math-with-frequency):

    npm install math-with-frequency

## Why

Some math libraries ([mathjs](https://www.npmjs.com/package/mathjs), [simple-statistics](https://www.npmjs.com/package/simple-statistics)) accepts the array of numbers to calculate the result.
There are tasks when to use this type of libraries, you will have to create large arrays of numbers.

### Example task:

Given: Array of Bitcoin trade sales with price and trade volume. \
Task: Find the median price.

```js
const btcSales = [
  { price: 47000, volume: 1500 },
  { price: 46000, volume: 2200 },
  { price: 49000, volume: 1900 },
];
```

#### `some-math-library` implementation:

```js
// salePrices.length === 5600
const salePrices = btcSales.flatMap((sale) => new Array(sale.volume).fill(sale.price));
median(btcSalePrices); // result
```

#### `math-with-frequency` implementation:

```js
// saleNumbers.length === 3
const saleNumbers = btcSales.map((sale) => ({ value: sale.price, frequency: sale.volume }));
median(saleNumbers); // result
```

If you don't see any problem with creating big arrays of same numbers, then maybe you don't need to use this library

## Common Input format

```ts
type Frequency = number; // int value, bigger than 0. Default is 1.
type Value = unknown; // Depending on the type of function, it may differ. It is often number.

type FrequencyObject<Value> = { value: Value; frequency?: Frequency };
type FrequencyTuple<Value> = [Value] | [Value, Frequency];

const validInput = [
  { value: 100 }, // frequency is 1
  { value: 100, frequency: 5 },
  [100], // frequency is 1
  [100, 5],
];
```
