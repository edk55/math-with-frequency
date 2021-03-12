import { FrequencyObject, FrequencyTuple } from './types';
import { frequencyItemToTuple } from './utils/frequencyItemToTuple';
import { validateFrequency } from './utils/validateFrequency';

export const mean = (items: (FrequencyObject<number> | FrequencyTuple<number>)[]): number => {
  const tuples = items.map(frequencyItemToTuple);
  validateFrequency(tuples); // if its not valid, then it will throw an Error

  const totalFrequency = tuples.reduce((acc, curr) => acc + curr[1], 0);
  const totalValue = tuples.reduce((acc, curr) => acc + curr[0] * curr[1], 0);

  return totalValue / totalFrequency;
};
