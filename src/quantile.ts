import { FrequencyObject, FrequencyTuple } from './types';
import { frequencyItemToTuple } from './utils/frequencyItemToTuple';
import { validateFrequency } from './utils/validateFrequency';

export const quantile = (
  items: (FrequencyObject<number> | FrequencyTuple<number>)[],
  prob: number,
  isAscSorted = false
): number => {
  const tuples = items.map(frequencyItemToTuple);
  validateFrequency(tuples); // if its not valid, then it will throw an Error

  const totalFrequency = tuples.reduce((acc, curr) => acc + curr[1], 0);

  if (!isAscSorted) {
    tuples.sort((a, b) => a[0] - b[0]);
  }

  if (prob === 1) return tuples[tuples.length - 1][0];
  if (prob === 0) return tuples[0][0];

  const searchFrequency = (totalFrequency - 1) * prob;
  const searchFrequencyRemainder = searchFrequency % 1;

  let prevFrequency = 0;

  for (let i = 0; i < tuples.length; i++) {
    const [, tupleFrequency] = tuples[i];

    if (prevFrequency + tupleFrequency > searchFrequency) {
      if (searchFrequencyRemainder === 0) {
        return tuples[i][0];
      }

      // else need to calc between two values
      const left = tuples[i][0];
      const right = tupleFrequency > 1 ? tuples[i][0] : tuples[i + 1][0];

      return left * (1 - searchFrequencyRemainder) + right * searchFrequencyRemainder;
    }

    prevFrequency += tupleFrequency;
  }

  // If you reach here, please open an issue
  throw new Error("Couldn't calculate quantile");
};
