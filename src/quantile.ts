import { QuantityObject, QuantityTuple } from './types';
import { quantityItemToTuple } from './utils/quantityItemToTuple';
import { validateQuantity } from './utils/validateQuantity';

export const quantile = (
  items: (QuantityObject<number> | QuantityTuple<number>)[],
  prob: number,
  isAscSorted = false
): number => {
  const tuples = items.map(quantityItemToTuple);
  validateQuantity(tuples); // if its not valid, then it will throw an Error

  const totalQuantity = tuples.reduce((acc, curr) => acc + curr[1], 0);

  if (!isAscSorted) {
    tuples.sort((a, b) => a[0] - b[0]);
  }

  if (prob === 1) return tuples[tuples.length - 1][0];
  if (prob === 0) return tuples[0][0];

  const searchQuantity = (totalQuantity - 1) * prob;
  const searchQuantityRemainder = searchQuantity % 1;

  let prevQuantity = 0;

  for (let i = 0; i < tuples.length; i++) {
    const [, tupleQuantity] = tuples[i];

    if (prevQuantity + tupleQuantity > searchQuantity) {
      if (searchQuantityRemainder === 0) {
        return tuples[i][0];
      }

      // else need to calc between two values
      const left = tuples[i][0];
      const right = tupleQuantity > 1 ? tuples[i][0] : tuples[i + 1][0];

      return left * (1 - searchQuantityRemainder) + right * searchQuantityRemainder;
    }

    prevQuantity += tupleQuantity;
  }

  // If you reach here, please open an issue
  throw new Error("Couldn't calculate quantile");
};
