import { Item } from './types';
import { frequencyItemToTuple } from './utils/frequencyItemToTuple';
import { validateFrequencyOrThrow } from './utils/validateFrequencyOrThrow';

export const mean = (items: Item<number>[]): number => {
  const tuples = items.map(frequencyItemToTuple);
  tuples.forEach(([, frequency]) => validateFrequencyOrThrow(frequency));

  const totalFrequency = tuples.reduce((acc, curr) => acc + curr[1], 0);
  const totalValue = tuples.reduce((acc, curr) => acc + curr[0] * curr[1], 0);

  return totalValue / totalFrequency;
};
