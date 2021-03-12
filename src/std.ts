import { mean } from './mean';
import { FrequencyObject, FrequencyTuple } from './types';
import { frequencyItemToTuple } from './utils/frequencyItemToTuple';
import { validateFrequencyOrThrow } from './utils/validateFrequencyOrThrow';

export enum StandardDeviationType {
  POPULATION,
  SAMPLE,
}

// https://www.mathsisfun.com/data/standard-deviation.html
export const std = (
  items: (FrequencyObject<number> | FrequencyTuple<number>)[],
  type = StandardDeviationType.POPULATION
): number => {
  const tuples = items.map(frequencyItemToTuple);
  tuples.forEach(([, frequency]) => validateFrequencyOrThrow(frequency));

  const meanValue = mean(items);

  const totalFrequency = tuples.reduce((acc, curr) => acc + curr[1], 0);

  let deviationsSum = 0;

  tuples.forEach((tuple) => {
    const [value, frequency] = tuple;

    deviationsSum += (value - meanValue) ** 2 * frequency;
  });

  if (type === StandardDeviationType.SAMPLE && totalFrequency < 2) {
    throw new Error('Total frequency should be not less than 2');
  }

  const variance =
    deviationsSum / (totalFrequency - (type === StandardDeviationType.SAMPLE ? 1 : 0));

  return Math.sqrt(variance);
};
