# Math with frequency

Math functions to use with frequency table.

## Installation

Install `math-with-frequency` using [npm](https://www.npmjs.com/package/math-with-frequency):

    npm install math-with-frequency

## Disclaimer

The library was created on the basis of personal needs, therefore a small number of functions is available. Any pull requests are welcome!

## Why

Some math libraries ([mathjs](https://www.npmjs.com/package/mathjs), [simple-statistics](https://www.npmjs.com/package/simple-statistics)) accepts the array of numbers to calculate the result.
There are tasks when to use this type of libraries, you will have to create large arrays of numbers.

### Example task:

Given: Array of Bitcoin sales with price and trade volume. \
Task: Find the mean sale price.

```js
const btcSales = [
  { price: 57000, volume: 1500 },
  { price: 56000, volume: 2200 },
  { price: 59000, volume: 1900 },
];
```

#### `some-other-math-library` example:

```js
// salePrices.length === 5600
const salePrices = btcSales.flatMap((sale) => new Array(sale.volume).fill(sale.price));
mean(btcSalePrices); // 57285.71428571428
```

#### `math-with-frequency` example:

```js
// saleNumbers.length === 3
const saleNumbers = btcSales.map((sale) => ({ value: sale.price, frequency: sale.volume }));
mean(saleNumbers); // 57285.71428571428
```

If you don't see any problem with creating big arrays of same numbers, then maybe you don't need to use this library

## Common Input format

```ts
type Frequency = number; // int value, bigger than 0. Default is 1.

type FrequencyObject<Value> = { value: Value; frequency?: Frequency };
type FrequencyTuple<Value> = [Value] | [Value, Frequency];

type Item<Value> = Value | FrequencyObject<Value> | FrequencyTuple<Value>;

const validInput: Item<number>[] = [
  100, // frequency is 1
  { value: 100 }, // frequency is 1
  { value: 100, frequency: 5 },
  [100], // frequency is 1
  [100, 5],
];
```

## API

### mean(items: Item\<number\>[]): number

The arithmetic mean (or simply mean) of a list of numbers, is the sum of all of the numbers divided by the number of numbers.

```ts
const input = [
  { value: 1, frequency: 10 },
  { value: 3, frequency: 20 },
];
const meanValue = mean(input); // 2.3333333333333335
```

### std(items: Item\<number\>[], type?: StandardDeviationType): number

Calculate standard deviation. You can also specify `StandardDeviationType`. Read more about type differencies [here](https://www.mathsisfun.com/data/standard-deviation.html).

```ts
const input = [
  { value: -100, frequency: 5 },
  { value: 300, frequency: 15 },
  { value: 255, frequency: 55 },
];
const populationStd = std(input); // 92.69064437987016
const sampleStd = std(input, StandardDeviationType.SAMPLE); // 93.31483085585946
```

### quantile(items: Item\<number\>[], prob: number, isAscSorted = false)

Find [quantile](https://en.wikipedia.org/wiki/Quantile_function).

```ts
const input = [
  { value: 999, frequency: 1000 },
  { value: 3, frequency: 1 },
  { value: 1, frequency: 1000 },
];
const median = quantile(input, 0.5); // 3
```

## License

MIT License

Copyright (c) 2021 Eugene Korobkov (e@korobkov.io)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
